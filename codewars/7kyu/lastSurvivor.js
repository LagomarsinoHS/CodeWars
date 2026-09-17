/**
 * Last Survivor
 * Kyu: 7
 *
 * console.log(revrot("123456987653", 6))//234561876549
 */

export function lastSurvivor(letters, coords) {
  let str = letters.split("")
  coords.forEach(coord => {
    str.splice(coord, 1)
  })
  return str.join("")
}
