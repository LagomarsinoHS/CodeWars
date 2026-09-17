/**
 * Find the missing term in an Arithmetic Progression
 * Kyu: 6
 *
 * console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
 */

export function findMissing(list) {
  let listLen = list.length;
  let iter = (list[listLen - 1] - list[0]) / listLen;
  for (let i = 0; i < listLen; i++) {
    let next = list[i] + iter
    if (next != list[i + 1]) {
      return next;
    }
  }
}
