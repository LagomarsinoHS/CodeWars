/**
 * Special Number (Special Numbers Series #5)
 * Kyu: 7
 *
 * console.log(balancedNum(7))
 */

export function specialNumber(n) {
  return [...n.toString()].every(x => /[0-5]/.test(x)) == true ? "Special!!" : "NOT!!"
}
