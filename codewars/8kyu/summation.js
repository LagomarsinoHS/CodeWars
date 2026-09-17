/**
 * Grasshopper - Summation
 * Kyu: 8
 *
 * console.log(isInMiddle("AabcBBB"));
 */

export function summation(num) {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i
  }
  return res
}
