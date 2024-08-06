import { parentPort } from 'node:worker_threads'

parentPort.on('message', (jobs) => {

    for (const job of jobs) {
        let count = 0;
        for (let i = 0; i < job; i++) {
            count++
        }
    }

    // Notificar al padre que se ha completado el trabajo
    parentPort.postMessage('done');
})

