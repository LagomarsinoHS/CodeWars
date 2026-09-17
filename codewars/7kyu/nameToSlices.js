/**
 * Sandwich / name to slices
 * Kyu: 7
 */

export function nameToSlices(name) {
  let res = 0
  name.split(" ").forEach((x, idx) => {
    if (idx === 0 && x !== 'bread') return null
    x === 'bread' ? res++ : res += 2
  })
  return res
}
