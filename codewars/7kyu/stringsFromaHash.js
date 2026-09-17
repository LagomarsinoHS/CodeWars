/**
 * Building Strings From a Hash
 * Kyu: 7
 *
 * console.log(quicksum("MID CENTRAL"))// 650
 */

export function stringsFromaHash(pairs) {
  return Object.keys(pairs)
    .map(key => `${key} = ${pairs[key]}`)
    .join(",")
}
