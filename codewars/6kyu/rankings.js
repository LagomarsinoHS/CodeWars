/**
 * Ranking System
 * Kyu: 6
 *
 * console.log(scramble('javsaripts', 'javascript'));
 */

export function rankings(arr) {
  console.log(arr)
  let rank = [...arr].sort((a, b) => b - a)
  return arr.map(e => e = rank.indexOf(e) + 1 + "°")
}
