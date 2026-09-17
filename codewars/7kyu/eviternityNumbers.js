/**
 * Simple eviternity numbers
 * Kyu: 7
 */

export function eviternityNumbers(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    const numStr = i.toString()
    if (/[^358]/g.test(numStr)) continue;

    const num8 = (numStr.match(/8/g) || []).length
    const num5 = (numStr.match(/5/g) || []).length
    const num3 = (numStr.match(/3/g) || []).length

    count += num8 >= num5 && num5 >= num3 ? 1 : 0
  }
  return count
}
