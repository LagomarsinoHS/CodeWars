/**
 * duplicateCount
 * Kyu: 6
 *
 * console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)) //->2,4
 */

export function duplicateCount(text) {
  let res = text.split("").reduce((acc, letra) => {
    acc[letra] ? acc[letra]++ : acc[letra] = 1
    return acc
  }, {})
  let count = 0
  for (let i in res) {
    if (res[i] > 1) count++
  }
  return count
}
