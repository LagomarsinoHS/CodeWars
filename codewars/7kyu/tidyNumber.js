/**
 * Tidy Number (Special Numbers Series #9)
 * Kyu: 7
 *
 * console.log(evensAndOdds(1015415))
 */

export function tidyNumber(n) {
  let s = n.toString()
  for (let i = 0; i <= s.length; i++) {
    if (s[i] > s[i + 1]) return false
  }
  return true
}
