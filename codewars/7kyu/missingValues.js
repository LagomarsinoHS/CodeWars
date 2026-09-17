/**
 * Simple Fun #136: Missing Values
 * Kyu: 7
 */

export function missingValues(arr) {
  let cantNumeros = arr.reduce((acc, ele) => {
    if (!acc[ele]) acc[ele] = 0
    acc[ele]++
    return acc
  }, {})

  let once,
    twice,
    thrice

  let objEntries = Object.entries(cantNumeros)
  for (let [num, cant] of objEntries) {
    if (cant == 1) once = num
    else if (cant == 2) twice = num
    else thrice = num
  }
  return once * once * twice
}

export function missingValues2(arr) {
  let cantNumeros = arr.reduce((acc, ele) => {
    if (!acc[ele]) acc[ele] = 0
    acc[ele]++
    return acc
  }, {})

  let once, twice;
  for (let x in cantNumeros) {
    if (cantNumeros[x] == 1) once = x
    if (cantNumeros[x] == 2) twice = x
  }
  return once * once * twice
}
