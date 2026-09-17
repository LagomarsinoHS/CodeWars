/**
 * Unique In Order
 * Kyu: 6
 *
 * console.log(arrayDiff([1, 2, 2, 2, 3], [2])) //[1,3]
 */

export function uniqueInOrder(iterable) {
  //Transformo el string a un arreglo de letras, de esta manera puedo usar el filter
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
  return iterable.filter(function (e, i, arr) {
    return e !== arr[i + 1];
  });
}
