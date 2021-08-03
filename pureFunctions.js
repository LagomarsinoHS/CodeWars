/*
Son aquellas funciones que reciben y entregan un mismo tipo de dato, evitando cualquier tipo de side effect.
Además de eso mantener la idea de inmutibilidad, es decir, no modificar los valores que estan entrando
*/

let arr = [1, 2, 3]
const addElementToArray = (array, ele) => [...array, ele]
let res = addElementToArray(arr, 4)
console.log(res)