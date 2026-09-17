/**
 * Disarium Number (Special Numbers Series #3)
 * Kyu: 7
 *
 * console.log(strong(145))
 */

export function disariumNumber(n) {
  let arrN = [...n.toString()]
  return arrN.map((e, i, arr) => Math.pow(e, i + 1)).reduce((acc, ele) => acc + ele) == n ? "Disarium !!" : "Not !!"
}
