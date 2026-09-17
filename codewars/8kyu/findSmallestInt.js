/**
 * Find the smallest integer in the array
 * Kyu: 8
 */

export function findSmallestInt(arr) {
  return arr.reduce((acc, ele) => {
    return ele < acc ? ele : acc
  }, arr[0])
}
