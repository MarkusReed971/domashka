'use strict'

//Пункт 1

const calculator = {
  a: 0,
  b: 0,

  init: (a, b) => {
    this.a = a;
    this.b = b;
  },

  add: () => this.a + this.b,
  diff: () => this.a - this.b,
}

calculator.init(1, 2);

console.log('Пункт 1');
console.log(calculator.add());
console.log(calculator.diff());


//Пункт 2

const obj = { a: 2 }

function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

console.log('\nПункт 2');
console.log(a === b);


//Пункт 3

function Calc(initDigit) {
  this.digit = initDigit;

  this.add = (num) => this.digit += num
  this.div = (num) => this.digit /= num
}

const calc1 = new Calc(1);

console.log('\nПункт 3');
console.log(calc1.add(2));
console.log(calc1.div(3));


//Пункт 4

function T() {
  this.a = true
  this[Symbol.toPrimitive] = () => this.a = !this.a;
}

const t = new T();

console.log('\nПункт 4');
console.log(!t == t);
console.log(!t == t);
