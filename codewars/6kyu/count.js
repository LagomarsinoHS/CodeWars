/**
 * Count characters in your string
 * Kyu: 6
 *
 * console.log(solution('abcdfghuyddfs', 'ddfs'))
 */

export function count(string) {
  let arrCadena = string.split("")
  let objeto = {}
  for (let letra of arrCadena) {
    if (!Object.keys(objeto).includes(letra) && letra != " " && letra != ",") {
      objeto[letra] = 1
    } else if (Object.keys(objeto).includes(letra) && letra != " " && letra != ",") {
      objeto[letra]++
    }
  }
  return objeto
}

export function count2(string) {
  return string.split("").reduce((acc, letra) => {
    if (letra != " " && letra != ",") acc[letra] ? acc[letra]++ : acc[letra] = 1
    return acc
  }, {})
}
