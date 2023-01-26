const { EventEmitter } = require('events')
/*
newListener
removeListener
*/

// ### Creo instancia de event ###
const myEmitter = new EventEmitter();


// ### Creacion de evento ###
// ? .on es lo mismo que .addListener
myEmitter.on('testEvent', (event, listener) => {
    //Primera Llamada
    console.log("Evento entrante", event);
    console.log("Funcion entrante?", listener ? true : false, listener);
})

myEmitter.on('testEvent', (event, ...listener) => {
    //Segunda Llamada    
    console.log("1 + 1 = Pez!");
    console.log("todos los arg que quedan", listener);
})

// ### Con emit puedo llamar a todos los eventos enlazados a ese, en este caso "testEvent" ###
// Con emit, llamo el evento <testEvent>, los parámetros siguientes son opcionales, puedo pasarle cosas en base a algo en particular
myEmitter.emit('testEvent', 'arg1', 'arg2', 'arg3', 'arg4', 'argN', () => console.log("wi"))

// ### Ver los eventos asociados a un emit ###
console.log(myEmitter.eventNames())

console.log('-----------------------------');

// ### Once ###
// Se indica un evento que solo se hará una vez
// Con new Listener se agrega un nuevo evento al principio de la cola, si el evento es XXX hará una acción
myEmitter.once('newListener', (event, listener) => {
    console.log(event);
    if (event === 'eventName') {
        // Insert a new listener in front
        myEmitter.on('eventName', () => {
            console.log('B');
        });
    }
});
myEmitter.on('eventName', () => {
    console.log('A');
});
myEmitter.emit('eventName');
// Prints:
//   B
//   A- 