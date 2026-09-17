/**
 * Adding Big Numbers
 * Kyu: 4
 *
 * console.log((expandedForm(70304)))// '70000 + 300 + 4'
 */

export function add(a, b) {
  let arrA = [...a], arrB = [...b]
  const arrayDesigual = arrA.length > arrB.length ? arrB : arrA
  while (arrA.length != arrB.length) arrayDesigual.unshift('0')

  let carry = 0;
  let result = [];
  for (let i = arrA.length - 1; i >= 0; i--) {
    let sumOfDigits = parseInt(arrA[i]) + parseInt(arrB[i]) + carry;
    carry = sumOfDigits >= 10 ? 1 : 0;
    sumOfDigits = String(sumOfDigits);

    result.unshift(sumOfDigits[sumOfDigits.length - 1]);
  }

  if (carry == 1) result.unshift(carry);

  return result.join("");
}
