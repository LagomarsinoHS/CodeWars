/**
 * Numbers in strings
 * Kyu: 7
 */

export function solve2(str) {
  console.log(str)
  let str2 = str.replace(/[A-z]/g, "-").split("-")
  return Math.max(...str2)
}
