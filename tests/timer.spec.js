const assert = require('assert');
const toc = require('../index.js');
const SECOND = 1000;

describe('tick of clock', () => {
    let timer

    beforeEach(() => { timer = toc() });

    describe('api', () => {
        it('start should exists', () => { assert.ok(timer.start) });
        it('stop should exists', () => { assert.ok(timer.stop) });
        it('reset should exists', () => { assert.ok(timer.reset) });
        it('getTime should exists', () => { assert.ok(timer.getTime) });
    });

    describe('api:start', () => {
        it('should start a stopwatch if no time is passed', (done) => {
            timer.start();
            setTimeout(() => {
                assert(timer.getTime() > 1000); 
                done();
            }, SECOND * 2);
        });
        it('should start a timer if time is passed', (done) => {
            timer.start(SECOND);
            setTimeout(() => {
                assert.equal(timer.getTime(), 0);
                done();
            }, SECOND * 2);
        });
    });

    describe('api:stop', () => {
        it('should stop a timer/stopwatch', (done) => {
            timer.start(SECOND);
            timer.stop();
            setTimeout(() => { 
                assert.equal(timer.getTime(), SECOND);
                done();
            }, SECOND * 2);
        });
    });

    describe('api:reset', () => {
        it('should set time to 0', () => {
            timer.start(SECOND);
            timer.reset();
            assert.equal(timer.getTime(), 0);
        });
    });
    
});
