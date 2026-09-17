/**
 * Two to One
 * Kyu: 7
 *
 * console.log(friend(["Ryan", "Kieran", "Mark"]));
 */

export function longest(s1, s2) {
  let reg = /[a-z]/i
  let s3 = [...s1, ...s2]
  let arrayFinal = []
  for (let pal of s1 + s2) {
    if (reg.test(pal) && !arrayFinal.includes(pal)) {
      arrayFinal.push(pal)
    }
  }
  return arrayFinal.sort().join("")
}
