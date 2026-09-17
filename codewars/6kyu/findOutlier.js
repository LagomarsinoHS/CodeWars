/**
 * Find The Parity Outlier
 * Kyu: 6
 *
 * console.log(score([1, 1, 1, 1, 2]))
 */

export function findOutlier(integers) {
  let par = [], impares = []
  integers.filter(e => e % 2 == 0 ? par.push(e) : impares.push(e))
  return par.length == 1 ? par[0] : impares[0]
}
