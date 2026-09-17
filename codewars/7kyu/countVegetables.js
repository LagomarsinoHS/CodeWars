/**
 * Help Suzuki count his vegetables....
 * Kyu: 7
 *
 * console.log(multiples3Or5(10))
 */

export function countVegetables(string) {
  const arrVegs = string
    .match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g)
    .reduce((acc, vegetable) => {
      if (!acc[vegetable]) acc[vegetable] = 0
      acc[vegetable]++
      return acc
    }, {})

  const result = []
  for (const prop in arrVegs) {
    const count = arrVegs[prop]
    result.push([count, prop])
  }

  return result.sort((a, b) => {
    const [countA, nameA] = a
    const [countB, nameB] = b

    //if (countA === countB) return nameB.localeCompare(nameA)
    //else return countB - countA
    return countB - countA || nameB.localeCompare(nameA)
  })
}
