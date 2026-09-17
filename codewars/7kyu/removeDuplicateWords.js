/**
 * Remove duplicate words
 * Kyu: 7
 *
 * console.log(typist2("BeiJingDaXueDongMen"), 31)
 */

export function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ")
}
