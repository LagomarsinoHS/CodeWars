/**
 * Meeting
 * Kyu: 6
 *
 * console.log(modifiedSum2([1, 2, 3], 3))
 */

export function meeting(s) {
  return s.toUpperCase().split(';').map((str) => {
    return str.split(':').reverse();
  }).sort().map((arr) => {
    return "(" + arr.join(', ') + ")";
  }).join('');
}
