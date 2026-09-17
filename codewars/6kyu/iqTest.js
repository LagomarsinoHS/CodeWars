/**
 * iqTest
 * Kyu: 6
 *
 * console.log(maxSumArr([-2, 2, 5, -11, 6]));
 */

export function iqTest(numbers) {
  const nums = numbers.split(" ")
  const [par, impar] = nums.reduce((arr, ele) => {
    ele % 2 == 0 ? arr[0].push(ele) : arr[1].push(ele)
    return arr
  }, [[], []])
  return par.length > 1 ? nums.indexOf(impar[0]) + 1 : nums.indexOf(par[0]) + 1
}
