/**
 * Beginner Series #3 Sum of Numbers
 * Kyu: 7
 *
 * console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
 */

export function getSum(a, b) {
  if (a == b) return a
  let max = Math.max(a, b)
  let min = Math.min(a, b)
  let total = 0
  for (let i = min; i <= max; i++) {
    total += i
  }
  return total
}
