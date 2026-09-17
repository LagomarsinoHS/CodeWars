/**
 * Which are in?
 * Kyu: 6
 *
 * console.log(switcher2(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']))//'btswmdsbd kkw
 */

export function inArray(array1, array2) {
  let res = []
  array2.forEach(word => {
    array1.forEach(w => {
      word.includes(w) ? res.push(w) : ""
    })
  })
  res = [...new Set(res)]
  return res.sort()
}

export function inArray2(arr1, arr2) {
  return [...new Set(arr2.reduce((acc, ele) => {
    arr1.forEach(wd => {
      ele.includes(wd) ? acc.push(wd) : ""
    })
    return acc
  }, []))].sort()
}

export function inArray3(arr1, arr2) {
  return arr1.filter(whole => (arr2.join(" ").includes(whole))).sort()
}
