/**
 * Sequence convergence
 * Kyu: 6
 *
 * console.log(recycleMe([5, -9, 0, 6, -84, -95, 15]))
 */

export function convergence(n) {
  console.log(n)
  let res = [n]
  console.log("ultima pos: ", res[res.length - 1])
  for (let i = 1; i < 15; i++) {
    let ultimaPos = res[res.length - 1]
    if (ultimaPos < 10) res.push(ultimaPos + ultimaPos)
    else {
      console.log("ultimo numero en el arr: ", ultimaPos)
      let sum = 0;
      let num = ultimaPos
      let numStr = ultimaPos.toString()
      console.log("1: ", numStr[0], "2: ", numStr[numStr.length - 1])
      sum = numStr[0] * (numStr[numStr.length - 1] == 0 ? 1 : numStr[numStr.length - 1])
      console.log("sum ", sum)
      console.log("num", num)
      res.push(num + sum)

    }
  }
  res = res.filter(e => e < 26)
  console.log(res)
  return res.length
}
