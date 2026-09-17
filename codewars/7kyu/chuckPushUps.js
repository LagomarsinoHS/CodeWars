/**
 * Chuck Norris I - Push Ups
 * Kyu: 7
 *
 * console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7))
 */

export function chuckPushUps(string) {
  const validador = str => {
    let res = str.replace(/[A-z|2-9]/g, "")
    return parseInt(res, 2) ? parseInt(res, 2) : res
  }
  if (typeof string !== "string" || string.length == 0) return "FAIL!!"
  if (!string.split(" ").some(x => /\d/.test(x))) return "CHUCK SMASH!!"
  let arrNum = string.split(" ").map(x => validador(x)).filter(Number)
  return Math.max(...arrNum)
}
