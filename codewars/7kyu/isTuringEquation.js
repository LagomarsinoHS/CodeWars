/**
 * Simple Fun #384: Is Turing's Equation?
 * Kyu: 7
 */

export function isTuringEquation(str) {
  const reverseNum = num => Number(num.split("").reverse().join(""))
  const [first, second, total] = str.match(/\d+/g).map(reverseNum)

  return first + second === total
}
