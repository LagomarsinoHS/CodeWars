/**
 * Double Trouble
 * Kyu: 7
 *
 * console.log(noonerize2([12, 34]))
 */

export function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}
