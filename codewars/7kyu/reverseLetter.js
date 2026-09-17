/**
 * Simple Fun #176: Reverse Letter
 * Kyu: 7
 *
 * console.log(wordValues(["abc", "abc abc"]));
 */

export function reverseLetter(str) {
  return str.match(/[a-z]/gi).reverse().join("")
}
