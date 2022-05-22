'use strict'

//Пункт 1

const getInitials = (fio) => {
  return fio.split(' ').filter((word) => word).map((word) => word[0].toUpperCase()).join('');
}

const fio = 'Леонтьев          Сергей дмитриевич';
console.log('Пункт 1: ', getInitials(fio));


//Пункт 2

function map(callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }

  return newArr;
}

Array.prototype.map = map;

const arr1 = [1, 2, 3];
console.log('Пункт 2: ', arr1.map((value) => value**2));


//Пункт 3

const unique = (arr) => {
  return Array.from(new Set(arr));
}

const arr2 = ['joppa', 'joppa', '0_o', 'ne joppa', 'joppa', '0_o'];
console.log('Пункт 3: ', unique(arr2));


//Пункт 4

function reduce(callback, initialValue) {
  let result = initialValue !== undefined ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
}

Array.prototype.reduce = reduce;

const arr3 = [1, 1, 2, 3, 5];
console.log('Пункт 4: ', arr3.reduce((accum, value) => accum + value, 0));


//Пункт 5

function filter(callback, thisArg) {
  const context = thisArg !== undefined ? thisArg : this;
  const newArr = [];

  for (let i = 0; i < context.length; i++) {
    if (callback(context[i], i, context)) {
      newArr.push(context[i]);
    }
  }

  return newArr;
}

Array.prototype.filter = filter;

const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log('Пункт 5: ', arr4.filter((value) => value % 2 === 0));


//Пункт 6

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Пункт 6: ', shuffle(arr5));


//Пункт 7

const getNumberSum = (object) => {
  return Object.values(object).reduce((accum, el) => {
    if (el.type !== 'number') return accum;
    return accum + el.value;
  }, 0);
}

const fields = {
  name: {
    type: 'string',
    value: 'Вася',
  },
  age: {
    type: 'number',
    value: 20,
  },
  bdate: {
    type: 'string',
    value: '11.09.2010',
  },
  math: {
    type: 'number',
    value: 5,
  },
  rusLang: {
    type: 'number',
    value: 4,
  },
  geometry: {
    type: 'number',
    value: 5,
  },
}

console.log('Пункт 7: ', getNumberSum(fields));
