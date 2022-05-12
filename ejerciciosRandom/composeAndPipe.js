/*
Compose y Pipe es una forma de aplicar distintas funciones a un argumento, normalmente esto se aplica de izquierda a derecha
Ej: Si tenemos un numero N, al cual queremos aplicar una f(x) que suma 2 y luego una f(x) que multiplica por 3 se vería asi
multiplicaPor3(sumaDos(3))

Lo que hace compose y pipe es lo mismo, pero se lo delega a una función que hace esto y se ve mas ordenado

! la unica diferencia entre pipe y compose es que una va de izq a derecha y otra de derecha a izquierda
*/

const suma2 = n => n + 2;
const resta1 = n => n - 1;
const multiplicaPor3 = n => n * 3;

// ### PIPE ###
const pipe = (...fns) => n => fns.reduce((acc, fn) => fn(acc), n)
const resultPipe = pipe(
    suma2,
    resta1,
    multiplicaPor3
)(2)
console.log(resultPipe);

// ### COMPOSE ###
const compose = (...fns) => n => fns.reduceRight((acc, fn) => fn(acc), n)
const resultCompose = compose(
    suma2,
    resta1,
    multiplicaPor3
)(2)
console.log(resultCompose);




// ### Longer Versions ###
const longerPipe = (...fns) => n => {
    return fns.reduce((acc, fn) => {
        acc = fn(acc)
        return acc
    }, n)
};

const longerCompose = (...fns) => n => {
    return fns.reduceRight((acc, fn) => {
        acc = fn(acc)
        return acc
    }, n)
};