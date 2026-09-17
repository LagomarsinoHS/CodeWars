/**
 * Highest and Lowest
 * Kyu: 7
 *
 * console.log(narcissistic(9474));
 */

export function highAndLow(numbers) {
  let numero = numbers.split(" ")
  console.log(numero);
  let result = Math.max(...numero) + " " + Math.min(...numero)
  return result
}

export function highAndLow2(numbers) {
  let numeros = numbers.split(" ").sort((a, b) => +b - +a)
  return `${numeros[0]}  ${numeros.at(-1)}`
}
