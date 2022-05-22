'use strict'

// Пункт 1

let i = 0;

// Уходит в бесконечный цикл из-за потери точности при работе с дробными числами
// Вот так можно это обойти, но вот как сделать код короче - хз
while (Math.abs(10 - i) >= 0.01) {
  i += 0.2
}
console.log('Пнкт 1: Закончили')


//Пункт 2
//Ну отменено, так отменено (:


//Пункт 3

const getRandomNum = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
}

const min = 5;
const max = 20;

console.log('Пункт 3: ', getRandomNum(min, max));


//Пункт 4

const findMatches = (str, substr) => {
  let indexList = [];
  let lastMatchIndex = -1;

  while ((lastMatchIndex = str.indexOf(substr, lastMatchIndex + 1)) !== -1) {
    indexList.push(lastMatchIndex);
  }

  return indexList;
}

const str = 'Yo all! I wont to say you Yo cause I always say Yo';
const substr = 'Yo';

console.log('Пункт 4: ', JSON.stringify(findMatches(str, substr)));


//Пункт 5

let numArray1 = [1, 2, 3, 4, 5, 6, 7];
let emptyArray1 = [];

for (let num of numArray1) {
  if (num % 2 === 0) {
    emptyArray1.push(num);
  }
}

console.log('Пункт 5: ', JSON.stringify(emptyArray1));


//Пункт 6

let numArray2 = [1, 2, 3, 4, 5, 6, 7];
let emptyArray2 = [];

for (let i = 0; i < numArray2.length; i++) {
  if (numArray2[i] % 2 === 0) {
    emptyArray2.push(numArray2[i]);
    numArray2.splice(i, 1);
  }
}

console.log('Пункт 6: ');
console.log(JSON.stringify(numArray2));
console.log(JSON.stringify(emptyArray2));


//Пункт 7

const numArray3 = [1, 2, 3, 4, 5, 6, 7];

const getEvenNums = (numArray) => {
  let copyNumArray = [...numArray];
  let emptyArray = [];

  for (let i = 0; i < copyNumArray.length; i++) {
    if (copyNumArray[i] % 2 === 0) {
      emptyArray.push(copyNumArray[i]);
      copyNumArray.splice(i, 1);
    }
  }

  return emptyArray;
}

console.log('Пункт 7: ');
const emptyArray3 = getEvenNums(numArray3);
console.log(JSON.stringify(numArray3));
console.log(JSON.stringify(emptyArray3));
