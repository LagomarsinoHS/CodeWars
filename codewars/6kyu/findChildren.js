/**
 * Where is my parent!?
 * Kyu: 6
 *
 * console.log(rot13("EBG13 rknzcyr."));// "ROT13 example.";
 */

export function findChildren(dancingBrigade) {
  let orden = [...dancingBrigade].sort()
  let size = orden.length
  let min = orden.filter(e => /[a-z]/.test(e))
  min.map(e => {
    let pos = orden.indexOf(e.toUpperCase())
    orden.splice(pos + 1, 0, e)
  })
  orden.length = size
  console.log(orden.length);
  return orden.join("")
}

export function findChildren2(dancingBrigade) {
  return dancingBrigade
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
    .join('')
}
