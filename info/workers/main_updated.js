import { cpus } from 'node:os'
import { Worker } from 'node:worker_threads'

function chunkify(array, n) {
    let chunks = []
    for (let i = n; i > 0; i--) {
        chunks.push(array.splice(0, Math.ceil(array.length / i)))
    }
    return chunks;
}


function run(jobs, concurrentWorkers) {
    const chunks = chunkify(jobs, concurrentWorkers)

    const tick = performance.now()
    let completedWorkers = 0;
    chunks.forEach((data, i) => {
        const worker = new Worker("./worker.js") // Instancio un worker y le digo que archivo utilizará
        worker.postMessage(data) // Le paso la data que quiero trabajar

        // Este worker estará esperando un mensaje desde worker.js, cuando llegue ese mensaje hara los ifs
        worker.on('message', (msg) => {

            if (msg === 'done') {
                console.log(`Worker ${i} completed.`)
                completedWorkers++
            }

            if (completedWorkers === concurrentWorkers) {
                console.log(`${concurrentWorkers} workers took ${performance.now() - tick} ms.`)
            }
        })
    })
}

const bigArray = Array.from({ length: 100 }, () => 1e9)

// consigo la cantidad maxima de cpus disponibles de mi maquina
const maxCpus = cpus().length

run(bigArray, maxCpus)


/*
Calcular todo esto, sin usar workers se demoró 1 minuto y algo más
Calcularlo con los max cpus, demoró 15 segundos, gran incremento!
*/