/**
 * Mirror, mirror, on the wall...
 * Kyu: 7
 *
 * console.log(getStrings("Las Vegas"))
 */

export function mirror(data) {
  let sort = data.sort((a, b) => a - b)
  return [...sort, ...sort.reverse().slice(1)]
}
