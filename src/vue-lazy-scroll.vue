<template>
    <div class="vue-lazy-scroll" ref="loader">
        <div class="vue-lazy-scroll-spinner">
        </div>
    </div>
</template>

<script>
    export default {
        props: ["loadMore", ""],
        mounted(){
            let target = this.getScrollTarget()
        },
        methods: {
            isInViewPort(){
                let el = this.$refs.loader

            },
            getScrollTarget(){
                let currentNode = this.$refs.loader
                while(currentNode && currentNode.tagName!=='HTML'&&currentNode.tagName!=='BODY'&&currentNode.nodeType===1){
                    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
                    if(overflowY==="scroll" || overflowY==="auto") return currentNode
                    currentNode = currentNode.parentNode
                }
                return window
            },
        }
    }
</script>

<style lang="scss">
.vue-lazy-scroll {
    position: relative;
    height: 30px;
}

.vue-lazy-scroll-spinner {
    // Put To Middle, Wrapper
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    &:before, &:after {
        content: " ";
        position: absolute;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 4px solid #b4d9ff;
        border-radius: 50%;
    }

    &:after {
        border-color: #2183ea transparent transparent;
        animation: loader .6s linear infinite;
    }

    @-webkit-keyframes loader {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
}
</style>