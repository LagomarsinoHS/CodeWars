/**
 * Explode
 * Kyu: 7
 *
 * console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))
 */

export function explode(x) {
  const [a, b] = x

  if (typeof a === 'number' && typeof b === 'number') {
    return Array.from({ length: a + b }).fill(x)
  } else if (typeof a === 'number') {
    return Array.from({ length: a }).fill(x)
  } else if (typeof b === 'number') {
    return Array.from({ length: b }).fill(x)
  }
  return "Void!"
}
