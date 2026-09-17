/**
 * Simple Pig Latin
 * Kyu: 6
 *
 * console.log(convergence(500))
 */

export function pigIt(str) {
  return str
    .split(" ")
    .map(e => {
      if (/\w/.test(e)) {
        let primeraLetra = e.slice(0, 1)
        return e = e.slice(1, e.length) + primeraLetra + "ay"
      } else return e
    })
    .join(" ")
}

export function pigIt2(str) {
  return str
    .split(" ")
    .map(e => {
      if (/\w/.test(e)) {
        let primeraLetra = e.charAt(0)
        return e.slice(1) + primeraLetra + "ay"
      } else return e
    })
    .join(" ")
}
