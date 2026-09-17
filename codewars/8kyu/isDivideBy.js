/**
 * Can we divide it?
 * Kyu: 8
 *
 * console.log(index([1, 2, 3, 4], 2))
 */

export function isDivideBy(number, a, b) {
  return number % a == 0 && number % b == 0 ? true : false
}
