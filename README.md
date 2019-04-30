# tick-of-clock

> Tiny stopwatch and countdown with events

[![build status](https://api.travis-ci.org/alazurenko/tick-of-clock.svg?branch=master)](https://travis-ci.org/alazurenko/tick-of-clock)
## Install

`npm i tick-of-clock`

## How to use

```js
const toc = require('tick-of-clock');
let timer = toc();

timer.start(); //starts stopwatch
timer.start(2000); //starts countdown with 2000ms
timer.stop();
timer.reset(); // resets time to 0
timer.getTime(); // returns amount of ms that have passed
```

### Events

| Event         | When
| ------------- |-------------|
| start         | Timer starts
| reset         | Timer reseted
| stop          | Timer has stopped

```js
timer.on('start', () => console.log("Let's Rock!"));
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)