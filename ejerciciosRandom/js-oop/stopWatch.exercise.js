function StopWatch() {
    this.duration = 0;
    let started = false
    let startTime;

    this.start = function () {
        if (started) throw new Error('StopWatch already started.')
        started = true
        startTime = new Date().getTime()
    }

    this.stop = function () {
        if (!started) throw new Error('StopWatch already Stopped.')
        started = false
        const seconds = (new Date().getTime() - startTime) / 1000
        this.duration += seconds
    }
    Object.defineProperty(this, 'reset', {
        get: function () {
            this.duration = 0
        }
    })
}

