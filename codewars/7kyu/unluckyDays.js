/**
 * unluckyDays
 * Kyu: 7
 *
 * console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
 */

export function unluckyDays(year) {
  let unlucky = 0;
  for (let i = 1; i <= 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) unlucky++
  }
  return unlucky
}
