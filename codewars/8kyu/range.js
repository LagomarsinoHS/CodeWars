/**
 * Generate range of integers
 * Kyu: 8
 *
 * console.log(squares(2));
 */

export function range(n, start, step) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(start)
    start += step
  }
  return arr
}
