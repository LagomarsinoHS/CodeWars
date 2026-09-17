/**
 * STRONGN Strong Number (Special Numbers Series #2)
 * Kyu: 7
 *
 * console.log(tidyNumber(1))
 */

export function strong(n) {
  const fact = x => x <= 1 ? 1 : x * fact(x - 1)
  let nArr = [...n.toString()]
  let a = nArr.reduce((acc, ele) => acc += fact(ele), 0)
  return a == n ? "STRONG!!!!" : "Not Strong !!"
}
