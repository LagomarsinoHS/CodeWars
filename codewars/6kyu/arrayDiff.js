/**
 * arrayDiff
 * Kyu: 6
 *
 * console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
 */

export function arrayDiff(a, b) {
  //return a.filter(ele=>b.includes(ele)==false)
  let arr = []
  for (let numa of a) {
    if (!b.includes(numa)) {
      arr.push(numa)
    }
  }
  return arr
}
