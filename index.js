'use strict'

//Пункт 1

function bind(context, ...args) {
  return (...otherArgs) => {
    this.apply(context, [...args, ...otherArgs]);
  }
}

Function.prototype.bind = bind;

function func1(age, sex) {
  console.log(this.name, age, sex);
}

const obj1 = { name: 'Artem' };
const bindedFunc = func1.bind(obj1, 18);

console.log('Пункт 1:');
bindedFunc('da');


//Пункт 2

function call(context, ...args) {
  const key = Symbol('called function');
  const tempContext = context;

  tempContext[key] = this;
  return tempContext[key](...args);
}

Function.prototype.call = call;

console.log('\nПункт 2:');
func1.call(obj1, 15, 'net');


//Пункт 3

const cache = (callback) => {
  let data = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (data[key]) return data[key];

    data[key] = callback(...args);
    return data[key];
  }
}

const func2 = (a, b) => {
  console.log('call: ', a, b);
  return a + b;
}

const cachedFunc = cache(func2);

console.log('\nПункт 3:');
console.log('result: ', cachedFunc(1, 2));
console.log('result: ', cachedFunc(1, 2));
console.log('result: ', cachedFunc(2, 2));
console.log('result: ', cachedFunc(2, 20));
console.log('result: ', cachedFunc(2, 2));


//Пункт 4

let hours = 0;
let minutes =  0;
let seconds =  0;

let timers = [];

const format = (num) => `0${num}`.slice(-2);

const startTimers = () => {
  timers.push(
    setInterval(() => {
      if (seconds === 59) {
        seconds = 0;
        return;
      }

      seconds += 1;
      console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    }, 1000)
  );

  timers.push(
    setInterval(() => {
      if (minutes === 59) {
        minutes = 0
        return;
      }

      minutes += 1;
      console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    }, 1000 * 60)
  );

  timers.push(
    setInterval(() => {
      if (hours === 23) {
        hours = 0
        return;
      }

      hours += 1;
      console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    }, 1000 * 60 * 60)
  );
}

const stopTimers = () => {
  for (let timer of timers) {
    clearInterval(timer);
  }
}

//Добавил кнопки, чтобы в консоли не было анархии
const startTimersButton = document.getElementById('startTimers');
startTimersButton.addEventListener('click', startTimers);

const stopTimersButton = document.getElementById('stopTimers');
stopTimersButton.addEventListener('click', stopTimers);

console.log('\nПункт 4: тыкни кнопку "Старт"');


//Пункт 5

let clockTimer = null;

const printTime = () => {
  console.log(new Date().toLocaleTimeString());
}

const setClockInterval = (callback) => {
  const timeout = 1000 - (Date.now() % 1000);

  clockTimer = setTimeout(() => {
    callback();
    setClockInterval(callback);
  }, timeout);
}

const startClock = () => {
  setClockInterval(printTime);
}

const stopClock = () => {
  clearTimeout(clockTimer);
}

const startClockButton = document.getElementById('startClock');
startClockButton.addEventListener('click', startClock);

const stopClockButton = document.getElementById('stopClock');
stopClockButton.addEventListener('click', stopClock);

console.log('\nПункт 5: тыкни кнопку "Старт"');
