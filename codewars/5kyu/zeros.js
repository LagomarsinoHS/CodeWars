/**
 * Number of trailing zeros of N!
 * Kyu: 5
 */

function factorial(n) {
  const memo = {}
  if (memo.hasOwnProperty(n)) return memo[n];
  if (n <= 1) return 1;
  memo[n] = n * factorial(n - 1);
  return memo[n];
}

export function zeros(n) {
  let count = 0
  console.log(BigInt(factorial(30)))
  let numStr = factorial(n).toString()
  for (let i = numStr.length - 1; i > 0; i--) {
    if (numStr[i] !== '0') break;
    count++
  }
  return count;
}
