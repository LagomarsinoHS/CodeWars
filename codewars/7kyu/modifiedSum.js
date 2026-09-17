/**
 * Nth power rules them all!
 * Kyu: 7
 *
 * console.log(rowWeights([80, 150]))
 */

export function modifiedSum(a, n) {
  return a.map(x => x ** n).reduce((acc, ele) => acc + ele) - a.reduce((acc, ele) => acc + ele)
}

export function modifiedSum2(a, n) {
  return a.reduce((acc, ele) => acc + ele ** n - ele, 0)
}
