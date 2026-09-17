/**
 * Create Phone Number
 * Kyu: 6
 *
 * console.log(count2('hola como estas, yo bien'))
 */

export function createPhoneNumber(numbers) {
  /*  console.log(numbers.join(""))
   let number = "("
   for (let i = 0; i < 3; i++) {
       number += numbers[i]
   }
   number += ") "
   for (let i = 3; i < 6; i++) {
       number += numbers[i]
   }
   number += "-"
   for (let i = 6; i < numbers.length; i++) {
       number += numbers[i]
   }
   return number */

  /*  let nume = numbers.join("")
   return "(" + nume.slice(0, 3) + ") " + nume.slice(3, 6) + "-" + nume.slice(6) */

  return numbers.reduce((acc, num) => {
    return acc.replace("x", num)
  }, "(xxx) xxx-xxxx")
}
