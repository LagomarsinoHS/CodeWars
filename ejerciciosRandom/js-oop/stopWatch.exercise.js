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

// Version con class
const sw = new StopWatch()

class StopWatchClass {
    #started = false;
    #startTime;
    constructor() {
        this.duration = 0;
    }

    start() {
        if (this.#started) throw new Error('StopWatch already started.');
        this.#started = true;
        this.#startTime = new Date().getTime();
    }

    stop() {
        if (!this.#started) throw new Error('StopWatch already Stopped.');
        this.#started = false;
        const seconds = (new Date().getTime() - this.#startTime) / 1000;
        this.duration += seconds;
    }

    get reset() {
        this.duration = 0;
    }
}

const sw2 = new StopWatchClass()