/**
 * Reverse or rotate?
 * Kyu: 6
 *
 * console.log(shoppingCalculation(["Apple is $5.", "Banana is $7.", "Orange is $2.", "Alice has $26.", "John has $41.",
 * "Alice buys 2 apples.",
 * "John buys 1 banana.",
 * "Alice buys 5 oranges."
 * ]))
 * /
 */

const validate = (str) => {
  return str.split("").map(num => Math.pow(num, 3)).reduce((acc, ele) => acc + ele, 0) % 2 == 0
}

export function revrot(str, sz) {
  const rotar = str => str.slice(1) + str.slice(0, 1)


  if (!str || sz <= 0 || sz > str.length) return ""
  let res = ""
  for (let i = 0; i < str.length; i = i + sz) {
    let chunk = str.substr(i, sz)
    if (chunk.length < sz) continue
    if (validate(chunk)) {
      let reverse = chunk.split("").reverse().join("")
      res += reverse
    } else {
      res += rotar(chunk)
    }
  }
  return res
}
