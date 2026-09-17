/**
 * Say Me Please Operations
 * Kyu: 7
 *
 * console.log(solve(6, 3))
 */

export function sayMeOperations(str) {
  console.log(str);
  let str2 = str.split(" ").map(e => Number(e))
  let res = "";
  for (let i = 0; i < str2.length; i++) {
    let n0 = str2[i],
      n1 = str2[i + 1],
      n2 = str2[i + 2]

    if (n2 || n2 === 0) {
      if (n0 + n1 === n2) res += "addition, "
      else if (n0 - n1 === n2) res += "subtraction, "
      else if (n0 * n1 === n2) res += "multiplication, "
      else res += "division, "
    }
  }
  return res.trim().replace(/.$/, "")
}
