/**
 * Calculate mean and concatenate string
 * Kyu: 7
 *
 * console.log(stringsFromaHash({ a: 1, b: '2' }))// should return "a = 1,b = 2"
 */

export function mean(lst) {
  return lst.reduce((acc, ele, idx) => {
    if (/[0-9]/.test(ele)) acc[0] += Number(ele)
    else acc[1] += ele
    if (idx === lst.length - 1) acc[0] = acc[0] / 10
    return acc
  }, [0, ""])
}
