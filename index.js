'use strict'

//Пункт 1
let i = 3;
while (i) {
  console.log(i--); // -> 3, потом 2, потом 1, т.к. оператор -- в постфиксной форме будет применен после логирования
}

//Пункт 2
let j = 0;
while (j < 3) {
  console.log(`number ${j++}!`);
}

//Пункт 3
const array = [];

for (let k = 1; k < 100; k++) {
  let isSimple = true;

  for (let l = 2; l < k; l++) {
    if (k % l === 0) {
      isSimple = false;
      break;
    }
  }

  if(isSimple) array.push(k);
}
console.log(array);

//Пункт 4
const n = 0;

if (n === 1) {
  console.log(`${n} апельсин`);
} else if (n >= 2 && n <= 4) {
  console.log(`${n} апельсина`);
} else {
  console.log(`${n} апельсинов`);
}
