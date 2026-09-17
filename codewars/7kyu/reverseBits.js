/**
 * Reverse the bits in an integer
 * Kyu: 7
 *
 * console.log(sumCubes(2))
 */

export function reverseBits(n) {
  return parseInt([...n.toString(2)].reverse().join(""), 2)
}
