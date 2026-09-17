/**
 * Playing with passphrases
 * Kyu: 6
 *
 * console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))//86
 */

export function playPass(s, n) {
  const transformCode = (char, n) => {
    if (Number(char) && typeof parseInt(char) == 'number') return String(9 - Number(char))
    else if (/[a-zA-Z]/i.test(char)) return String.fromCharCode(char.charCodeAt(0) + n);
    return char
  }
  const upAndDown = str => {
    let res = ''
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      res = i % 2 == 0 ? letter.toUpperCase() + res : letter.toLowerCase() + res
    }
    return res
  }

  let res = ''
  for (const char of s) {
    res += transformCode(char, n)
  }

  return upAndDown(res)
}
