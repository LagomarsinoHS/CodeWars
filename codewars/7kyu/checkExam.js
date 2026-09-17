/**
 * Check the exam
 * Kyu: 7
 *
 * console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]))// [3.6, "udiwstagwo"]
 */

export function checkExam(array1, array2) {
  //["a", "a", "b", "c"], ["a", "a", "b", "c"] -> 16
  //["a", "a", "c", "b"], ["a", "a", "b",  ""] -> 7

  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    const elementA = array1[i]
    const elementB = array2[i]

    if (elementB === "") continue;
    else if (elementA === elementB) score += 4;
    else score -= 1;
  }
  return score < 0 ? 0 : score;
}

export function checkExam2(array1, array2) {
  let score = 0;
  array1.forEach((answer, idx) => {
    if (array2[idx]) score += (answer === array2[idx] ? 4 : -1)
  })

  return score;
}
