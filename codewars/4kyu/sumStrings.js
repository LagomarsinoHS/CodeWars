/**
 * sumStrings
 * Kyu: 4
 *
 * console.log(middleMe(19, 'z', '#'))
 */

export function sumStrings(a, b) {
  let res = []
  let largo = a.length

  for (let i = 0; i < largo; i++) {
    let sum;
    sum = (Number(a[i]) + Number(b[i])).toString()
    res.push(sum)
  }
  return res.join("")
}
