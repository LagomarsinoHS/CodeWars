/**
 * Dominant array elements
 * Kyu: 7
 *
 * console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
 */

export function dominantArray(arr) {
  let largo = arr.length
  let arreglo = [...arr]
  let res = []
  for (let i = 0; i < largo; i++) {
    console.log("Array", arreglo);
    let num = arreglo.shift()
    console.log("num en turno", num);
    console.log("NumeroMax", Math.max(...arreglo) == -Infinity ? 0 : Math.max(...arreglo))
    if (Math.max(...arreglo) == Infinity ? 0 : Math.max(...arreglo) < num) {
      console.log("entre con", num);
      res.push(num)
    }
    console.log(".------");
  }
  return res
}

export function dominantArray2(arr) {
  return arr.filter((num, idx, arrey) => arrey.slice(idx + 1).every(n => n < num))
}

export function dominantArray3(arr) {
  return arr.filter((num, idx, array) => num > Math.max(...array.slice(idx + 1)))
}
