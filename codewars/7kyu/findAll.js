/**
 * Find all occurrences of an element in an array
 * Kyu: 7
 *
 * console.log(alphabetPosition2("The sunset sets at twelve o' clock."))
 */

export function findAll(array, n) {
  /* let arr = []
  array.forEach((ele,index)=>ele==n?arr.push(index):0)
  return arr */
  //Con reduce
  return array.reduce((acc, ele, index) => {
    if (ele == n) acc.push(index)
    return acc

  }, [])
  //Ojo con este
  /* array.reduce((pre, val, idx) => val === n ? [...pre, idx] : pre, []); */
}
