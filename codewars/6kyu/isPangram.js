/**
 * Detect Pangram
 * Kyu: 6
 *
 * console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
 */

export function isPangram(string) {
  /*  let rege = /[a-z]/i
   let str = new Set([...string].map(e=>e.toLowerCase()).filter(e => rege.test(e)))
   console.log([...str].length)
   console.log([...str])
   return [...str].length == 26 ? true : false */

  return "abcdefghijklmnopqrstuvwxyz".split("").every(letra => string.includes(letra))
}
