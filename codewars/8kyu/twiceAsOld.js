/**
 * Twice as old
 * Kyu: 8
 *
 * console.log(reverseBits(417))
 */

export function twiceAsOld(dadYearsOld, sonYearsOld) {
  let res;
  for (let i = 0; i < 100; i++) {
    if (dadYearsOld - i == sonYearsOld * 2) res = i
    else if (dadYearsOld + i == sonYearsOld * 2) res = i
  }
  return res
}
