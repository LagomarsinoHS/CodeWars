/**
 * Noonerize Me
 * Kyu: 7
 *
 * console.log(spoonerize2("nit picking"))
 */

export function noonerize(numbers) {
  //if (numbers.some(x => typeof x !== "number")) return "Invalid Array"
  if (numbers.some(isNaN)) return "Invalid Array"
  console.log(numbers[1].toString().slice(0))
  let res = [numbers[1].toString()[0] + numbers[0].toString().slice(1), numbers[0].toString()[0] + numbers[1].toString().slice(1)]
  console.log(res)
  return Math.abs((parseInt(res[1]) - parseInt(res[0])))
}

export function noonerize2(numbers) {
  let [num1, num2] = numbers.map(String);
  [num1, num2] = [num2[0] + num1.slice(1), num1[0] + num2.slice(1)];
  return num1 && num2 ? Math.abs(num1 - num2) : 'invalid array';
}
