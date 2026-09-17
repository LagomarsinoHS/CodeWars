/**
 * N-th Power
 * Kyu: 8
 *
 * console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
 */

export function index(array, n) {
  if (array.length - 1 < n) return -1

  let res = array.map((e, i) => {
    if (i == n) return e = Math.pow(e, n)
  }).filter(e => e).join("")
  return Number(res)

  //return array.length - 1 < n ? -1 : Math.pow(array[n], n)
  //return array[n] **n || -1
}
