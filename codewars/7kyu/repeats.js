/**
 * Sum of array singles
 * Kyu: 7
 *
 * console.log(unluckyDays(2015))
 */

export function repeats(arr) {
  let reduced = arr.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1
    return acc
  }, {})
  let soloUno = Object.entries(reduced).filter(x => x[1] == 1).map(x => Number(x[0])).reduce((acc, num) => acc + num)
  return soloUno
}

export function repeats2(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, ele) => acc + ele)
}
