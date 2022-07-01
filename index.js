'use strict'

// Пункт 1

const animal = {
  jumps: null,
}

const rabbit = {
  __proto__: animal,
  jumps: true,
}

console.log('Пункт 1: ');

console.log(rabbit.jumps); // true т.к. берет у себя

delete rabbit.jumps;
console.log(rabbit.jumps); // null т.к. берет из цепочки прототипов

delete animal.jumps;
console.log(rabbit.jumps); // undefined т.к. нет в цепочке прототипов


// Пункт 2

const hamster = {
  eat(food) {
    this.stomach.push(food);
  },
}
const speedy = {
  stomach: [],
  __proto__: hamster,
}
const lazy = {
  stomach: [],
  __proto__: hamster,
}

console.log('\nПункт 2: ');

speedy.eat('apple');
console.log(speedy.stomach);

console.log(lazy.stomach);


// Пункт 3

function AnotherHamster() {
  this.stomach = [];
  this.eat = (food) => this.stomach.push(food);
}

const anotherSpeedy = new AnotherHamster();
const anotherLazy = new AnotherHamster();

console.log('\nПункт 3: ');

anotherSpeedy.eat('joppa');
console.log(anotherSpeedy.stomach);

console.log(anotherLazy.stomach);


// Пункт 4

function callDefer(timeout, ...args) {
  setTimeout(() => this(...args), timeout);
}

Function.prototype.callDefer = callDefer;

function showSumm(a, b) {
  console.log(a + b);
}

console.log('\nПункт 4: ');
showSumm.callDefer(5000, 1, 2);
