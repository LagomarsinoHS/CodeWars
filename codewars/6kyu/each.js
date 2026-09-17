/**
 * Each n-th element of list
 * Kyu: 6
 */

export function each(n, xs) {
  if (n === 0) return []

  const result = []
  if (n > 0) {
    for (let i = n - 1; i < xs.length; i += n) {
      result.push(xs[i])
    }
  } else {
    n = Math.abs(n)
    for (let i = xs.length - n; i >= 0; i -= n) {
      result.push(xs[i])
    }
  }
  return result;
}
