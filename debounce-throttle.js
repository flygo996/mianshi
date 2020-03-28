function debounce(fn, ms) {
    let timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, ms)
    }
}

function throttle(fn, ms) {
    let canRun = false
    return function() {
        if (!canRun) {
            return
        }
        canRun = false
        setTimeout(() => {
            fn.apply(this, arguments)
            canRun = true
        }, ms)
    }
}
