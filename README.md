# tick-of-clock

### Stopwatch || Countdown ⏰ 
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
`start` 

`stop` 

`reset`

How to use
```js
timer.on('start', () => console.log("Let's Rock!"));
```
