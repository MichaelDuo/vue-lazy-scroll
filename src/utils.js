export function isInViewPort(parent, target){
    let viewTop = parent.scrollTop
    , viewBottom = viewTop + parent.clientHeight
    , targetTop = target.offsetTop
    , inViewPort = targetTop>=viewTop && targetTop<=viewBottom
    return inViewPort
}

export function throttle(fn, delay){
    let now, lastExec, timer, context, args, timeLeft
    let execute = function(){
        fn.apply(context, args)
        lastExec = now
    }
    return function(){
        context = this
        args = arguments
        now = Date.now()
        timeLeft = delay - (now - lastExec)
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        if(lastExec){
            let timeLeft = delay - (now - lastExec)
            if(timeLeft < 0){
                execute()
            } else {
                timer = setTimeout(()=>{
                    execute()
                }, timeLeft)
            }
        } else {
            execute()
        }
    }
}