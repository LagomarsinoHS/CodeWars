/**
 * Automorphic Number (Special Numbers Series #6)
 * Kyu: 7
 *
 * console.log(specialNumber(5))
 */

export function automorphic(n) {
  console.log(n)
  let cuadrado = Math.pow(n, 2)
  return cuadrado.toString().includes(n) ? "Automorphic" : "Not!!"
}

export function automorphic2(n) {
  return (n * n).toString().endsWith(n) ? "Automorphic" : "Not!!"
}
