/**
 * Unique string characters
 * Kyu: 7
 *
 * console.log(quarterOf(3))
 */

export function uniqueString(a, b) {
  let res = ""
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) res += a[i]
  }
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) res += b[i]
  }
  return res
}

export function uniqueString2(a, b) {
  return [...a, ...b].filter(x => !a.includes(x) || !b.includes(x)).join("")
}

export function uniqueString3(a, b) {
  return [...a, ...b].reduce((acc, cur) => {
    return acc += a.includes(cur) && b.includes(cur) ? "" : cur
  }, "")
}
