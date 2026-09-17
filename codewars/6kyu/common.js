/**
 * Common array elements
 * Kyu: 6
 *
 * console.log(permutations('abc'))
 */
const countReps = arr => arr.reduce((acc, ele) => {
  acc.set(ele, (acc.get(ele) || 0) + 1);
  return acc
}, new Map())

export function common(a1, a2, a3) {
  let result = 0;

  const a2Map = countReps(a2)
  const a3Map = countReps(a3)

  for (const num of a1) {
    if (a2Map.has(num) && a3Map.has(num)) {
      result += num
      a2Map.set(num, a2Map.get(num) - 1)
      a3Map.set(num, a3Map.get(num) - 1)
    }
  }

  return result
}

export function common2(a1, a2, a3) {
  return a1.reduce((acc, ele) => {
    if (a2.includes(ele) && a3.includes(ele)) {
      acc += ele
      a2.splice(a2.indexOf(ele), 1)
      a3.splice(a3.indexOf(ele), 1)
    }
    return acc
  }, 0)
}
