/**
 * getVowels
 * Kyu: 7
 *
 * console.log(uniqueString3("xyab", "xzca"))
 */

export function getVowels(str) {
  /*     return [...str].reduce((acc, ele) => {
          /[aeiou]/.test(ele) ? acc++ : ""
          return acc
      }, 0) */
  console.log(str.match(/[aeiou]/g))
  return (str.match(/[aeiou]/g) || []).length
}
