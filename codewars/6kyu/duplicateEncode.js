/**
 * Duplicate Encoder
 * Kyu: 6
 *
 * console.log(list([{ name: 'Bart' }, { name: 'Homer' }, { name: 'Lisa' }, { name: 'Maggie' }]));
 */

export function duplicateEncode(word) {
  const arrWords = [...word].map(x => x.toLowerCase())
  const countWords = arrWords.reduce((acc, ele) => {
    if (!acc.hasOwnProperty(ele)) acc[ele] = 0
    acc[ele] += 1
    return acc
  }, {})
  let str = ''
  arrWords.forEach(letter => countWords[letter] > 1 ? str += ')' : str += '(')
  return str
}

export function duplicateEncode2(word) {
  const arrWords = [...word]
  let str = ''
  if (/[A-Z]/.test(arrWords[0])) return 'Ignorada'
  for (const letter of word) {
    const regex = new RegExp(+'"' + letter + '"', "g");
    const repetidos = word.match(regex).length
    repetidos > 1 ? str += ')' : str += '('
  }
  return str
}
