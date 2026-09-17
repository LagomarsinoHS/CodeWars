/**
 * String ends with
 * Kyu: 7
 *
 * console.log(random(4, 5, 10))
 */

export function solution(str, ending) {
  let subString = str.substr((str.length - ending.length), ending.length)
  //return subString == ending ? true : false
  return str.endsWith(ending) ? true : false
}
