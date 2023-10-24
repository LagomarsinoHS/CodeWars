/*

El "point-free style" es un estilo de programación funcional que se enfoca en escribir funciones sin hacer referencia explícita
 a los argumentos de entrada. En el contexto de JavaScript, esto significa que las funciones están diseñadas para operar en funciones
 y componerse entre sí sin necesidad de mencionar las variables o argumentos de entrada de manera explícita.
 En lugar de manipular datos directamente, se componen funciones que transforman y combinan datos.
*/

const listOfAccounts = [
    { name: 'account1', goodAccount: true },
    { name: 'account2', goodAccount: true },
    { name: 'account3', goodAccount: true },
    { name: 'account4', goodAccount: false },
    { name: 'account5', goodAccount: false },
]

const isGoodAccount = x => x.goodAccount
const not = fn => (...args) => !fn(...args);

const goodAccounts = listOfAccounts.filter(isGoodAccount)
const badAccounts = listOfAccounts.filter(not(isGoodAccount))
console.log(goodAccounts);
console.log(badAccounts);