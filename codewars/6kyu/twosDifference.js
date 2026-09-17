/**
 * Difference of 2
 * Kyu: 6
 */

export function twosDifference(input) {
  const mapper = input.reduce((acc, ele) => ({ ...acc, [ele]: true }), {})
  const result = []

  input
    .sort((a, b) => a - b)
    .forEach(num => {
      if (mapper[num + 2]) result.push([num, num + 2])
    })

  return result;
}
