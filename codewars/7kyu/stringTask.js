/**
 * String Task
 * Kyu: 7
 *
 * console.log(repeats2([4, 5, 7, 5, 4, 8]))
 */

export function stringTask(s) {
  let res = [...s.toLowerCase()].filter(x => !/[aeiouy]/.test(x)).map(x => "." + x)
  console.log(res)
  return res.join("")
}

export function stringTask2(s) {
  return s.toLowerCase().replace(/[aeiouy]/g, "").replace(/./g, v => "." + v)
}
