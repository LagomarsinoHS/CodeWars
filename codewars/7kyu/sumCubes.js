/**
 * Sum of Cubes
 * Kyu: 7
 *
 * console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
 */

export function sumCubes(n) {
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += Math.pow(i, 3)
  }
  return res
}
