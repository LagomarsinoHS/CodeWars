/**
 * Replace With Alphabet Position
 * Kyu: 6
 *
 * console.log(isPangram("The quick brown fox jumps over the lazy dog."))
 */

export function alphabetPosition(text) {
  let alf = "0abcdefghijklmnopqrstuvwxyz"
  let arr = text.toLowerCase().split("")
  let res = []
  arr.forEach(e => {
    if (alf.includes(e)) {
      let pos = alf.indexOf(e)
      res.push(pos)
    }
  })
  return res.join(" ")
}

export function alphabetPosition2(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  return text.toLowerCase()
    .split('')
    .filter(t => letters.includes(t))
    .map(t => letters.indexOf(t) + 1)
    .join(' ');
}
