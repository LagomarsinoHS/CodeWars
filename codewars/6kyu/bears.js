/**
 * Pairs of Bears
 * Kyu: 6
 *
 * console.log(gordon2('What feck damn cake'))
 */

export function bears(x, s) {
  let pairs = []
  let arrStr = [...s]
  for (let i = 0; i < arrStr.length; i++) {
    const valor = arrStr[i] + arrStr[i + 1]
    if (/8B|B8/g.test(valor)) {
      pairs.push(valor)
      arrStr.splice(i, 1)
    }
  }
  return [pairs.join(""), pairs.length >= x]
}

export function bears2(x, s) {
  var pairs = s.match(/(8B)|(B8)/g);
  return [pairs.join(""), pairs.length >= x];
}
