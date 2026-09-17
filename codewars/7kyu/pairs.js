/**
 * Nombre  Simple consecutive pairs
 * Kyu: 7
 *
 * console.log(sumStrings("123", "456"))
 * Nombre Ej: Simple consecutive pairs (7kyu)
 */

export function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) count++
  }
  return count
}

export function pairs2(ar, count = 0) {
  for (let i = 0; i < ar.length; i += 2) {
    Math.abs(ar[i] - ar[i + 1]) == 1 ? count++ : count
  }
  return count
}
