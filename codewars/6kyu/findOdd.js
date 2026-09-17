/**
 * Find the odd int
 * Kyu: 6
 *
 * console.log(duplicateCount("aabbcde"))
 */

export function findOdd(arr) {
  let a = arr.reduce((acc, ele) => {
    acc[ele] ? acc[ele]++ : acc[ele] = 1
    return acc
  }, {})
  for (let item in a) {
    if (a[item] % 2 == 1) return Number(item)
  }
}
