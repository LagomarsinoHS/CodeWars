/**
 * Convert string to camel case
 * Kyu: 6
 *
 * console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))//"4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
 */

export function toCamelCase(str) {
  let finalStr = ''
  for (let i = 0; i <= str.length; i++) {
    const char = str[i] || ''
    if (/-|_/.test(char)) {
      const newChar = str[i + 1]
      finalStr += newChar.toUpperCase()
      i++
    } else {
      finalStr += char
    }
  }
  return finalStr
}
