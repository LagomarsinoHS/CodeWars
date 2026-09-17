/**
 * Does my number look big in this?
 * Kyu: 6
 */

export function narcissistic(value) {
  // Code me to return true or false
  let largoNum = value % 10
  let numeros = value.toString().split("").map(e => parseInt(e))
  let valor = 0;
  console.log(numeros)
  if (largoNum == 1) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false

  } else if (largoNum == 2) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  } else if (largoNum == 3) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 4) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 5) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 6) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 7) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 8) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
  else if (largoNum == 9) {
    valor = numeros.reduce((acc, num) => {
      return acc += Math.pow(num, largoNum)
    }, 0)
    return valor == value ? true : false
  }
}

export function narcissistic2(value) {
  const arrayOfNums = value.toString().split("")
  const numLength = arrayOfNums.length
  return arrayOfNums.reduce((acc, num) => acc + (Math.pow(parseInt(num), numLength)), 0) === value
}
