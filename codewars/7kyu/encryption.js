/**
 * International Morse Code Encryption
 * Kyu: 7
 *
 * console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
 */

export function encryption(message) {
  const CHAR_TO_MORSE = {} //this exist on the kata
  return [...message].reduce((phrase, word) => phrase += `${CHAR_TO_MORSE[word] || ' '} `, '').trim()
}
