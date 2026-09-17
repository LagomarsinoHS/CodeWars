/**
 * scramble
 * Kyu: 5
 *
 * console.log(moveZeros([1, 2, 0, 1, false, true, 0, 1, 0, 3, 0, 1]));
 */

export function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      console.log(`letra ${str2[i]} si se encontro`);
      str1 = str1.replace(str2[i], "")
    } else {
      console.log(`letra ${str2[i]} NO se encontro`);
      return false
    }
  }
  return true
}
