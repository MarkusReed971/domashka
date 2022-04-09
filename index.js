'use strict'

//Пункт 1

const user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;
console.log('Пункт 1: ', JSON.stringify(user, null, 2));


//Пункт 2

const obj =  {
  0: 'Yo!',
  name: 'Vasya',
  age: 2,
  money: 100,
};

const cloneProperties = (obj) => {
  const newObj = {};

  for (let key in obj) {
    newObj[key] = obj[key];

    if (!isNaN(obj[key])) {
      newObj[key + 'Clone'] = obj[key] * 2;
    }
  }

  return newObj;
}

console.log('Пункт 2: ',JSON.stringify(cloneProperties(obj), null, 2));


//Пункт 3

const obj1 =  {
  0: 'Yo!',
  name: 'Vasya',
};

const obj2 =  {
  name: 'Kostya',
  age: 987,
  money: 100,
};

const obj3 =  {
  money: 10000000000000000000,
};

Object.prototype.customAssign = (to, ...from) => {
  from.map(obj => {
    for (let key in obj) {
      to[key] = obj[key];
    }
  })

  return to;
}

const newObj = Object.customAssign({}, obj1, obj2, obj3);

console.log('Пункт 3: ',JSON.stringify(newObj, null, 2));
