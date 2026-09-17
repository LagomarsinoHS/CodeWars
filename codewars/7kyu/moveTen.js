/**
 * Move 10
 * Kyu: 7
 *
 * console.log(missingValues2([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]))
 */

export function moveTen(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}
