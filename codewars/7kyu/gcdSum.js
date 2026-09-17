/**
 * GCD sum
 * Kyu: 7
 *
 * console.log(hero(10, 5))
 */

export function solve(sum, gcd) {
  if (sum % gcd !== 0) return -1
  return [gcd, sum - gcd]
}
