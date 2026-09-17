/**
 * Row Weights
 * Kyu: 7
 *
 * console.log(consecutive([4, 8, 6]))
 */

export function rowWeights(array) {
  let res = [0, 0]
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) res[0] += array[i]
    else res[1] += array[i]
  }
  return res
}
