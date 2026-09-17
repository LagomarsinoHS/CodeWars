/**
 * ROT13
 * Kyu: 5
 *
 * console.log(rankings([3, 4, 1, 2, 5]))
 */

export function rot13(str) {
  console.log(str);
  let alpma = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let alpmi = "abcdefghijklmnopqrstuvwxyz"
  let cont = 0;
  return [...str].map(e => {
    if (/[A-Z]/.test(e)) {
      if (alpma.indexOf(e) + 13 >= 26) {

        cont = (alpma.indexOf(e) + 13) - 26
        return e = alpma[cont]
      } else return e = alpma[alpma.indexOf(e) + 13]
    }
    else if (/[a-z]/.test(e)) {
      if (alpmi.indexOf(e) + 13 >= 26) {
        cont = (alpmi.indexOf(e) + 13) - 26
        return e = alpmi[cont]
      } else return e = alpmi[alpmi.indexOf(e) + 13]
    } else return e
  }).join("")
}
