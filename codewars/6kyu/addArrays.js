/**
 * Sum two arraysSum two arrays
 * Kyu: 6
 *
 * console.log(automorphic2(625))
 */

export function addArrays(array1, array2) {
  if (array1.length == 0 || array2.length == 0) return []
  console.log(array1, array2)
  let arr = Math.sign(array1[0]) ? array1.join("") : array1.join("") * -1
  let arr2 = Math.sign(array2[0]) ? array2.join("") : array2.join("") * -1
  console.log(arr, arr2)
  console.log(parseInt(arr), parseInt(arr2))
  let res = parseInt(arr) + parseInt(arr2)
  console.log("respuesta", res.toString().split("").map(Number))
  res = res.toString().split("")
  if (res[0] == "-") {
    res.shift()
    res[0] = "-" + res[0]
  }
  console.log(res)
  return res.map(Number)
}
