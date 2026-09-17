/**
 * Interview Question (easy)
 * Kyu: 7
 *
 * console.log(dative2("szék"))
 */

export function getStrings(city) {
  let citySplit = [...city.toLowerCase()].filter(e => /\S/.test(e)).reduce((acc, i) => {
    acc[i] ? acc[i] += "*" : acc[i] = "*"
    return acc
  }, {})
  let res = []
  for (let item in citySplit) {
    res.push(`${item}:${citySplit[item]}`)
  }
  return res.join(",")
}
