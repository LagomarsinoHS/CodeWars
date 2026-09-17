/**
 * Evens and Odds
 * Kyu: 7
 *
 * console.log(stringTask("Codewars"))
 */

export function evensAndOdds(num) {
  return num.toString(num % 2 ? 2 : 16)
}
