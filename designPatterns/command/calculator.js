class Calculator {
    value;
    constructor(amount = 0) {
        this.value = amount
    }

    add(value) {
        this.value = value;
    }
    substract(value) {
        this.value = value
    }
    multiply(value) {
        this.value = value
    }
    divide(value) {
        this.value = value
    }

    getValue() {
        return this.value
    }
}

const calculator = new Calculator()
calculator.add(10)
console.log(calculator.getValue());

/*
Esta es la forma clasica de hacer una clase, cada una con sus métodos, pero hay otra
que puede servir para poder agregar o quitar o hacer cualquier acción en cualquier parte.
Será en el betterCalculator.js
*/