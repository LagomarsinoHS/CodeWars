/*
 Crear funcion generadora que devuelva los numeros fibonacci de 0 a N
*/

function* fibonacciGen(n) {
    let [prev, curr] = [0, 1]
    yield prev
    yield curr
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr]
        yield curr
    }
}

for (const num of fibonacciGen(10)) {
    console.log(num);
}