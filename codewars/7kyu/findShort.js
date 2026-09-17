/**
 * Shortest Word
 * Kyu: 7
 *
 * console.log(setAlarm(true, false))
 */

export function findShort(s) {
  return s.split(" ").reduce((acc, ele) => {
    acc < ele.length ? acc : acc = ele.length
    return acc
  }, Infinity)
  //return Math.min(...s.split(" ").map(x=>x.length))
}
