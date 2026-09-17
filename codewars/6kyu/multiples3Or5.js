/**
 * Multiples of 3 or 5
 * Kyu: 6
 *
 * console.log(getPlanetName(5));
 */

export function multiples3Or5(number) {
  console.log("Number", number);
  let sum = 0
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i
  }
  return sum
}
