/**
 * Numbers to letters
 * Kyu: 7
 *
 * console.log(plant("#", 10, 2, 15))
 */

export function switcher(x) {
  let letters = {
    a: 26, b: 25, c: 24, d: 23, e: 22, f: 21, g: 20, h: 19, i: 18,
    j: 17, k: 16, l: 15, m: 14, n: 13, o: 12, p: 11, q: 10, r: 9, s: 8, t: 7, u: 6, v: 5, w: 4, x: 3, y: 2, z: 1,
    "!": 27, "?": 28, " ": 29
  }
  return x.map(num => {
    for (let key in letters) {
      const value = letters[key]
      if (num == value) {
        return num = key
      }
    }
  }).join("")
}

export function switcher2(x) {
  let alpha = " zyxwvutsrqponmlkjihgfedcba!? "
  return x.map(num => alpha[num]).join("")
}
