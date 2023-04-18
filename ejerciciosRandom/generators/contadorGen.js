/*
Crear una funcion generadora que cuente de 1 a N
*/
function* counter(n) {
    for (let i = 1; i <= n; i++) {
        yield i
    }
}

for (const num of counter(10)) {
    console.log(num);
}