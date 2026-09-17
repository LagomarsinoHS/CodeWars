/**
 * Turkish Numbers, 0-99
 * Kyu: 7
 *
 * console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']
 */

export function getTurkishNumber(num) {
  let largoNum = num.toString().length
  let numTurko = {
    0: "sıfır", 1: "bir", 2: "iki", 3: "üç", 4: "dört", 5: "beş", 6: "altı", 7: "yedi", 8: "sekiz", 9: "dokuz", 10: "on", 20: "yirmi", 30: "otuz", 40: "kırk", 50: "elli", 60: "altmış", 70: "yetmiş", 80: "seksen", 90: "doksan"
  }
  if (num in numTurko) {
    return numTurko[num]
  } else {
    let str = ""
    str += numTurko[num.toString()[0] + 0] + " " + numTurko[num.toString()[1]]
    return str
  }
}
