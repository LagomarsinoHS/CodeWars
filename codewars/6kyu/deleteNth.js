/**
 * Delete occurrences of an element if it occurs more than n times
 * Kyu: 6
 *
 * console.log(getVowels("abracadabra"))
 */

export function deleteNth(arr, n) {
  let nuevoArr = [...arr]
  let res = arr.reduce((acc, ele) => {
    if (!acc[ele]) acc[ele] = 1
    else (acc[ele]++)
    return acc
  }, {})
  console.log("res", res);
  console.log("nuevoArr", nuevoArr);

  nuevoArr.forEach(ele => {
    while (res[ele] > n) {
      let idx = nuevoArr.lastIndexOf(ele)
      nuevoArr.splice(idx, 1)
      res[ele]--
    }
  })
  return nuevoArr
}

export function deleteNth2(arr, x) {
  var obj = {}
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}
