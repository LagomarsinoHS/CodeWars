/*
Crearé un array de largo 100 donde cada item será un numero de 1 billon
*/

const jobs = Array.from({ length: 100 }, () => 1e9)

// Ahora veré cuando demora simplemente en contar de 0 a 1 billon por cada item del array

const tick = performance.now()
for (const job of jobs) {
    let count = 0;
    for (let i = 0; i < job; i++) {
        count++        
    }    
}
const tock = performance.now()

console.log(`It takes ${tock-tick / 1000} sec.`)