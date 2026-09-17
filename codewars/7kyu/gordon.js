/**
 * Hells Kitchen
 * Kyu: 7
 *
 * console.log(moveTen("testcase"))
 */

export function gordon(s) {
  let word = s.replace(/[a-z]/g, x => {
    if (x == "a") x = "@"
    if (/[eiou]/.test(x)) x = "*"
    return x.toUpperCase()
  }).split(" ").map(x => x + "!!!!").join(" ")
  return word
}

export function gordon2(s) {
  return s.toUpperCase()
    .replace(/[A-Z]+/g, x => x + '!!!!')
    .replace(/[AEIOU]/g, x => x == "A" ? "@" : "*")
}
