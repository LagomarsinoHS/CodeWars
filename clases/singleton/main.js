const singletonClass = require('./singleton')

const singleton1 = singletonClass.getInstance()
const singleton2 = singletonClass.getInstance()

console.log(singleton1.getValue())
console.log(singleton2.getValue())

console.log("Equal::", singleton1 === singleton2);