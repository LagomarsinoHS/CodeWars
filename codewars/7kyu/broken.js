/**
 * The Office III - Broken Photocopier
 * Kyu: 7
 */

export function broken(x) {
  let res = ''
  for (const char of x) {
    res += char === '0' ? '1' : '0'
  }
  return res
}
