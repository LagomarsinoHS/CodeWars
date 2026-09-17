/**
 * Sort the odd
 * Kyu: 6
 *
 * console.log(getSum(5, 1))
 */

export function sortArray(array) {
  let arrImparOrdenado = [...array].filter(e => e % 2 !== 0).sort((a, b) => a - b)
  return array.map(e => {
    if (e % 2 !== 0) {
      e = arrImparOrdenado.shift()
    }
    return e
  })
}
