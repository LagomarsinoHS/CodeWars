/**
 * Hungarian Vowel Harmony (easy)
 * Kyu: 7
 *
 * console.log(invert([1, 2, 3, 4, 5]))
 */

export function dative(word) {
  let filtered = [...word].filter(e => /[eéiíöőüűaáoóuú]/.test(e))
  let res = /[eéiíöőüű]/.test(filtered[filtered.length - 1]) ? "nek" : "nak"
  return word + res
}

export function dative2(word) {
  return /[eéiíöőüű]/.test(word) ? word + "nek" : word + "nak"
}
