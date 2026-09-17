/**
 * lifePathNumber
 * Kyu: 6
 *
 * console.log(litres(3))
 */

export function lifePathNumber(dateOfBirth) {
  const reducir = (num) => {
    let suma = 0;
    console.log("-El Largo del numero es:", num.length, `(${num})`)
    for (let numero of num) {
      console.log("sumando: ", numero)
      suma += Number(numero)
    }
    console.log("Resultado", suma.toString())
    if (suma.toString().length > 1) {
      return reducir(suma.toString())
    }
    return suma
  }

  let [ano, mes, dia] = dateOfBirth.split("-")
  console.log(ano, mes, dia)
  return reducir(reducir(ano) + reducir(mes) + reducir(dia) + "")
}
