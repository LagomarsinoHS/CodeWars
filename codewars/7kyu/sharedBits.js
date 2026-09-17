/**
 * Shared Bit Counter
 * Kyu: 7
 *
 * console.log(dominantArray3([16, 17, 14, 3, 14, 5, 2]));
 */

export function sharedBits(a, b) {
  let num = a.toString(2)
  let num2 = b.toString(2)
  let res = false
  let cont = 0
  while (num.length != num2.length) {
    if (num.length < num2.length) num = "0" + num
    else if (num2.length < num.length) num2 = "0" + num2
  }

  for (let i = 0; i < num.length; i++) {
    console.log(i)
    if (num[i] == "1" && num2[i] == "1") cont++
    if (cont >= 2) return true
  }
  return res
}
