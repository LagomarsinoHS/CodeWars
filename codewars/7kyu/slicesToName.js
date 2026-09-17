/**
 * Sandwich / slices to name
 * Kyu: 7
 */

export function slicesToName(n) {
  if (typeof n !== 'number' || n <= 1) return null
  const resto = Math.floor(n / 2)
  const sandwich = resto * 2
  const bread = n - sandwich
  return sandwich + bread
}
