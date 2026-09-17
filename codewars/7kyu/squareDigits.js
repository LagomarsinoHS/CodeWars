/**
 * Square Every Digit
 * Kyu: 7
 */

export function squareDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((res, n) => res += Math.pow(+n, 2), "")
}
