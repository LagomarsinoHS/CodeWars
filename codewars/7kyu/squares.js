/**
 * Filling an array (part 2)
 * Kyu: 7
 *
 * console.log(getTurkishNumber(16))
 */

export function squares(n) {
  let arr = []
  for (let index = 1; index <= n; index++) {
    arr.push(index * index)
  }
  return arr
}
