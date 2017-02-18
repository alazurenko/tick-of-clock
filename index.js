const mitt = require('mitt');
const MOMENT = 10;

/**
 * Creates an instance of timer 
 * @param state Object Can take timer state object
 * 
 * @returns Object timer instance 
 */
function timer(state = { time: 0 }) {
    let timer = state;
    let emitter = mitt();
    let interval;

    return Object.assign({}, {
        start: start,
        stop: stop,
        reset: reset,
        getTime: () => timer.time
    }, emitter);

    /** 
     * Starts the countdown if argument is passed or starts a stopwatch if no argument
     * Emmits start event
     * @param time Number - Amount of milliseconds 
     */
    function start(time = 0) {
        if(!interval) {
            let step = time ? Number(`-${MOMENT}`) : Number(`+${MOMENT}`);
            timer.time = timer.time || time;
            interval = setInterval(tick(timer, step, Boolean(time)), MOMENT); 
            emitter.emit('start');
        }
    }

    /**
     * Performs one tick of timer
     * 
     * @param timer Object - Timer state
     * @param step Number - A step of milliseconds that should be performed
     * @param isCountdown Boolean - Is tick for countdown
     * 
     * @returns Function That can be applied for tick of a timer
     */
    function tick(timer, step, isCountdown) {
        return () => {
            if(isCountdown && timer.time === 0) {
                stop();
            } else {
                timer.time += step;
            }
        }
    }

    /**
     * Stops the timer
     * Emits stop event
     */
    function stop() {
        clearInterval(interval);
        interval = null;
        emitter.emit('stop');
    }

    /** 
     * Resets the timer
     * Emits reset event
     */
    function reset() {
        stop();
        timer = { time: 0 };
        emitter.emit('reset');
    }
}

module.exports = timer;
