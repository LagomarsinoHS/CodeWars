/**
 * Greed is Good
 * Kyu: 5
 *
 * console.log(score([1, 1, 1, 1, 2]))
 * console.log(score2([2, 4, 4, 5, 4])) // 450: 400 (for three 4s) + 50 (for the 5)
 */

export function score(dice) {
  let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0
  let total = 0
  dice.forEach(e => {
    switch (e) {
      case 1: uno++
        break;
      case 2: dos++
        break;
      case 3: tres++
        break;
      case 4: cuatro++
        break;
      case 5: cinco++
        break;
      case 6: seis++
        break;
    }
  })
  if (uno > 2) total += 1000, uno -= 3
  if (seis > 2) total += 600
  if (cinco > 2) total += 500, cinco -= 3
  if (cuatro > 2) total += 400
  if (tres > 2) total += 300
  if (dos > 2) total += 200
  total += (100 * uno)
  total += (50 * cinco)
  return total
}

export function score2(dice) {
  const util = (obj, i) => {
    let numeroDeReps = obj.get(i)
    if (!numeroDeReps) return 0

    let total = 0
    if (i === 1 && numeroDeReps > 2) total += 1000, numeroDeReps -= 3
    if (i === 1) total += (100 * numeroDeReps)
    if (i === 6 && numeroDeReps > 2) total += 600
    if (i === 5 && numeroDeReps > 2) total += 500, numeroDeReps -= 3
    if (i === 5) total += (50 * numeroDeReps)
    if (i === 4 && numeroDeReps > 2) total += 400
    if (i === 3 && numeroDeReps > 2) total += 300
    if (i === 2 && numeroDeReps > 2) total += 200
    return total
  }
  let result = 0;
  const obj = dice
    .reduce((acc, num) => {
      let data = acc.get(num) + 1 || 1
      acc.set(num, data)
      return acc
    }, new Map())

  Array.from({ length: 6 }, (_, i) => {
    result += util(obj, i + 1)
  })
  return result
}
