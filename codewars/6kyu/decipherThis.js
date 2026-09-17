/**
 * Decipher this!
 * Kyu: 6
 *
 * console.log(score2([2, 4, 4, 5, 4])) //  450:  400 (for three 4s) + 50 (for the 5)
 */

export function decipherThis(str) {
  return str
    .split(" ")
    .reduce((phrase, word) => {
      return phrase += " " + word
        .replace(/\d+/g, w => String.fromCharCode(w))
        .replace(/(.)(.)(.*)(.)/, '$1$4$3$2')
    }, '')
    .trim()
}
