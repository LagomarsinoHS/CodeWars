/*
Escribe una función generadora que genere una secuencia de números enteros aleatorios entre 1 y 10 (incluyendo 1 y 10),
pero que omita cualquier número que se haya generado anteriormente en la secuencia.
*/

function* randomNumGen(n) {
    const usedNums = new Set()

    while (usedNums.size < n) {
        const random = Math.floor(Math.random() * n + 1)
        if (!usedNums.has(random)) {
            usedNums.add(random)
            yield random
        }
    }
    yield 'You have all the numbers already.'
}

for (const num of randomNumGen(10)) {
    console.log(num);
}

/* for (let i = 0; i < 30; i++) {
    //Math.floor(Math.random() * 11); //Del 0 al 10
    //console.log(Math.floor(Math.random() * (10 - 0 + 1) + 0))//Del min al maximo incluido
} */
