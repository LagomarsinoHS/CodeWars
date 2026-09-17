/**
 * How many consecutive numbers are needed?
 * Kyu: 7
 */

export function consecutive(arr) {
  console.log(arr)
  if (arr.length <= 1) return 0
  let cont = 0;
  let numMax = Math.max(...arr)
  let numMin = Math.min(...arr)
  for (let i = numMin; i <= numMax; i++) {
    if (!arr.includes(i)) cont++
  }
  return cont
}
