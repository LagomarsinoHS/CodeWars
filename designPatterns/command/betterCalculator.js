class BetterCalculator {
    value = 0
    history = []
    constructor() { }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }

    getValue() {
        return this.value;
    }

    getHistory() {
        return this.history;
    }
}

class AddCommand {
    valueToAdd;
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd;
    }
}
class SubstractCommand {
    valueToAdd;
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue - this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue + this.valueToAdd;
    }
}

class MultiplyCommand {
    valueToAdd;
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue * this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue / this.valueToAdd;
    }
}

class DivideCommand {
    valueToAdd;
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue / this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue * this.valueToAdd;
    }
}

// Inicializo calculadora con valor 0 e historial []
const betterCalculator = new BetterCalculator()

/*
Ejecuto el metodo execute command, este esta esperando un command
En este caso es una instancia de AddCommand, con valor inicial 10
La calculadora ejecuta el comando, el cual le pasa el valor actual de la CALCULADORA
El execute de AddCommand se ejecuta, toma el valor de la calculadora y se lo suma al que se le pasó
*/
betterCalculator.executeCommand(new AddCommand(10))

/*
Ejecuto el metodo execute command, este esta esperando un command
En este caso es una instancia de SubstractCommand, con valor inicial 5
La calculadora ejecuta el comando, el cual le pasa el valor actual de la CALCULADORA (10)
El execute de SubstractCommand se ejecuta, toma el valor de la calculadora y se lo resta al que se le pasó
*/
betterCalculator.executeCommand(new SubstractCommand(5))

// Ejecuta el método, el cual agarra el ultimo comando con su valor y lo ejecuta
betterCalculator.undo()


console.log(betterCalculator.getValue());
console.log(betterCalculator.getHistory())

/*
Esto se llama command pattern, se puede utilizar en el caso que queramos definir comandos por acciones.
De esta manera puedo utilizar estos comandos donde sea ya que el comando como tal es el que hace la accion, no la clase. Asi puedo hacer mas fuerte la clase para hacer distintos tipos de operaciones
*/

