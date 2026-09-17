/**
 * random
 * Kyu: 7
 *
 * console.log(range(3, 1, 1));
 */

export function random(n, min, max) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(Math.floor(Math.random() * ((max + 1) - min) + min))
  }
  return arr
}
