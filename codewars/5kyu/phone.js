/**
 * Phone Directory
 * Kyu: 5
 *
 * console.log(repetirTexto("Hola Mundo", 3))
 */

export function phone(str, num) {
  let strSplit = str.split("\n").filter(x => x.includes(num))

  if (strSplit.length > 1) return `Error => Too many people: ${num}`
  if (!strSplit.length) return `Error => Not found: ${num}`
  let name = strSplit[0].match(/<.+>/)[0].slice(1, -1)
  let address = strSplit[0].replace(/<.+>|\+\d\d?-(\d{3}-){2}\d{4}|[;$*/?,:!]/g, "").replace(/_| +/g, " ")
  return `Phone => ${num}, Name => ${name}, Address => ${address.trim()}`
}
