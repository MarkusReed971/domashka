console.log('' + 1 + 0) // -> '10' т.к. слева string всё приводится к string
console.log('' - 1 + 0) // -> -1 т.к. минус не определен для string всё приводится к number
console.log(true + false) // -> 1 т.к. плюс не определен для boolean всё приводится к number
console.log(6 / "3") // -> 2 т.к. деление не определено для string всё приводится к number
console.log('2' * '3') // -> 6 т.к. умножение не определено для string всё приводится к number
console.log(4 + 5 + 'px') // -> '9px' т.к. слева - направо сначала number, потом приводится к string, т.к. 'px' не приводится к number
console.log('$' + 4 + 5) // -> '$45' т.к. слева string всё приводится к string
console.log('4' - 2) // -> 2 т.к. минус не определен для string всё приводится к number
console.log('4px' - 2) // -> NaN т.к. минус не определен для string, но и '4px' не приводится к number
console.log(7 / 0) // -> infinity при делении на бесконечно маленькое получается бесконечно большое
console.log(' -9 ' + 5) // -> ' -9 5' т.к. слева string всё приводится к string
console.log(' -9 ' - 5 ) // -> -14 т.к. минус не определен для string и приведение к number обрезает пробелы
console.log(null + 1) // -> 1 т.к. null при приведении к number обращается в 0
console.log(undefined + 1) // -> NaN т.к. undefined при приводится к number обращается в NaN и NaN + number = NaN
console.log(' \t \n' - 2 ) // -> -2 т.к. минус не определен для string и приведение к number обрезает пробелы, символы переноса, и т.д.
console.log('' + undefined) // -> 'undefined' т.к. слева string и undefined при приведении к string обращается в 'undefined'
console.log('1' - 1) // -> 0 т.к. минус не определен для string всё приводится к number
console.log('1' + -1) // -> '1-1' т.к. слева string всё приводится к string, и отрицательные числа тоже
