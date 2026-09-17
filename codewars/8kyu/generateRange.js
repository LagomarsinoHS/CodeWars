/**
 * Generate range of integers
 * Kyu: 8
 *
 * console.log(summation(6))
 */

export function generateRange(min, max, step) {
  let res = []
  for (let i = min; i <= max; i = i + step) res.push(i)
  return res
}
