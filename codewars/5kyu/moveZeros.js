/**
 * Moving Zeros To The End
 * Kyu: 5
 *
 * console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))
 */

export function moveZeros(arr) {
  /*    let res = arr.filter(e => e !== 0)
     console.log(res);
     let cero = arr.length - res.length
     for (let i = 1; i <= cero; i++) {
         res.push(0)
     }
     return res */
  return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))
}
