/**
 * Balanced Number (Special Numbers Series #1 )
 * Kyu: 7
 *
 * console.log(disariumNumber(89))
 */

export function balancedNum(number) {
  let center = number.toString().length / 2
  let left;
  console.log(center)
  if (number.toString().length % 2 === 0) {
    left = number.toString().slice(0, center - 1)
  } else {
    left = number.toString().slice(0, center)
  }
  let right = number.toString().slice(center + 1, number.toString().length)
  console.log(left, right)
  left = [...left].map(Number).reduce((acc, ele) => acc + ele, 0)
  right = [...right].map(Number).reduce((acc, ele) => acc + ele, 0)
  return left === right ? "Balanced" : "Not Balanced"
}
