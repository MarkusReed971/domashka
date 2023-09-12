'use strict'

// Пункт 1
const a = '1'
console.log((+a + 1) === 2 ) // -> true т.к. унарный оператор + перед строкой пытается привести её к числу

// Пункт 2
console.log(5 > 4) // -> true т.к. 5-4=1 -> 1>0 (математика)
console.log("ананас" > "яблоко") // -> false т.к. строки сравниваются по кодировке, "а" кодируется в число меньше, чем "я"
console.log("2" > "12") // -> true т.к. строки сравниваются по кодировке, "2" кодируется в число больше, чем "1"
console.log(undefined === null) // -> false т.к. === - сравнение с типом, а тип у null и undefined разный
console.log(null == "\n0\n") // -> false т.к. null приводится к false, а не пустая строка приводится к true
console.log(null === +"\n0\n") // -> false т.к. === - сравнение с типом, а тип у null и строки разный

// Пункт 3
console.log(undefined == null) // -> true т.к. при == происходит приведение типов, и null и undefined приводится к false, а false == false -> true

// Пункт 4
const num = 11
let answer = ''

switch (true) {
  case num > 0:
    answer = 'Положительное'
    break
  case num < 0:
    answer = 'Отрицательное'
    break
  default:
    answer = 'Ноль'
}

console.log(answer)

// Пункт 5
const start = 1
const end = 10
const point = 7

console.log(point >= start && point <= end)

// Пункт 6
if (confirm('Можно?')) {
  const name = prompt('Как звать?', 'Костя')
  alert(`Здарова, ${name}!`)
}
