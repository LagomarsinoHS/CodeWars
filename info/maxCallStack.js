/*
Funcion llamada trampoline, se usa para evitar el max call stack.
todo: Averiguar bien como funcionaba, no recuerdo.
*/

const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

const suma = (num, sum = 0) => {
    return num === 0
        ? sum
        : suma(num - 1, sum + num)
}
//console.log(suma(100))

const sumaNueva = (num, sum = 0) => {
    return num === 0
        ? sum
        : () => sumaNueva(num - 1, sum + num)
}


const tsuma = trampoline(sumaNueva)
const result = tsuma(100000)
console.log(result); 