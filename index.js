'use strict'

// Пункт 1

const func1 = (name, callback) => {
  setTimeout(() => {
    if (name === 'John') {
      callback(null, `Hi, ${name}`);
    } else {
      callback(new Error('You are not john!'));
    }
  }, 1000);
}

const promisify = (func) => (...args) => {
  return new Promise((resolve, reject) => {
    func(
      ...args,
      (error, data) => {
        if (error) reject(error);
        resolve(data);
      }
    )
  });
}

const func1Promisified = promisify(func1);

func1Promisified('John')
  .then((data) => {
    console.log(data);
  })

// Пункт 2

const wait = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

const f = () => {
  wait().then((data) => console.log(data));
}

f();
