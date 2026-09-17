/**
 * Spoonerize Me
 * Kyu: 7
 *
 * console.log(grow([1, 2, 3]))
 */

export function spoonerize(words) {
  let [palA, palB] = words.split(" ")
  let flag = palA[0]
  palA = palA.replace(palA[0], palB[0])
  palB = palB.replace(palB[0], flag)
  return palA + " " + palB
}

export function spoonerize2(words) {
  let [palA, palB] = words.split(" ")
  return [palB[0] + palA.slice(1), palA[0] + palB.slice(1)].join(" ")
}
