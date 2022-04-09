'use strict'

//Пункт 1

const min = (...nums) => {
  if (nums.length === 0) return 'ha... ha...';
  return Math.min(...nums);

  // Ну или не для ленивых
  // return nums.reduce((prev, current) => prev < current ? prev : current);
}

console.log(min(100, 20, 50, 33));
console.log(min());


//Пункт 2

const checkNumber = () => {
  let num = '';
  while (num.trim() === '' || isNaN(+num)) num = prompt('Davay!');

  console.log('Ogo! Pravilno :)')
}

checkNumber();


//Пункт 3

const validateNumber = (validate) => {
  let num = '';
  while (num.trim() === '' || isNaN(+num) || !validate(num)) num = prompt('Davay teper s validate!');

  console.log('Ogo! Voobshe pravilno (:')
}

const validate = (num) => num % 2 === 0;

validateNumber(validate);
