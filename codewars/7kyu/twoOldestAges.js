/**
 * Two Oldest ages
 * Kyu: 7
 *
 * console.log(validatePIN("12345"));
 */

export function twoOldestAges(ages) {
  /* ages.sort((a, b) => a - b)
  return [ages[ages.length - 2], ages[ages.length - 1]] */
  return ages.sort((a, b) => a - b).slice(-2)
}
