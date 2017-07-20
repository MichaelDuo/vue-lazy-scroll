<template>
    <div class="vue-lazy-scroll">
        <slot name="spinner">
            <spinner/>
        </slot>
    </div>
</template>

<script>
    import spinner from "../component/spinner"
    import * as utils from "./utils"
    export default {
        components: {spinner},
        props: ["loadMore"],
        mounted(){
            let scrollView = this.getScrollTarget()
            scrollView.addEventListener("scroll", utils.throttle(this.scrollHandler, 1000))
        },
        methods: {
            scrollHandler(){
                if(utils.isInViewPort(this.getScrollTarget(), this.$el)){
                    this.loadMore()
                }
            },
            getScrollTarget(){
                let currentNode = this.$el
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
</style>