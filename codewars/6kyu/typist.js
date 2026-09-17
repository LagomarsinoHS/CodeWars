/**
 * Simple Fun #305: Typist
 * Kyu: 6
 *
 * console.log(iqTest("2 4 7 8 10"))
 */

export function typist(s) {
  const isUpperCase = s => s == s.toUpperCase()
  return [...s].reduce((acc, ele, idx, self) => {
    if (idx === 0 && ele === ele.toUpperCase()) return acc
    else if (idx === 0) return acc = 1

    if (isUpperCase(self[idx - 1]) && ele == ele.toLowerCase()) acc += 2
    else if (isUpperCase(self[idx - 1]) && ele == ele.toUpperCase()) acc += 1
    else if (!isUpperCase(self[idx - 1]) && ele == ele.toLowerCase()) acc += 1
    else if (!isUpperCase(self[idx - 1]) && ele == ele.toUpperCase()) acc += 2
    return acc
  }, 2)
}

export function typist2(s) {
  const isUpperCase = s => s == s.toUpperCase()
  let mayusActive = false
  return [...s].reduce((acc, ele, idx, self) => {
    acc++
    if (isUpperCase(ele)) {
      if (!mayusActive) { mayusActive = !mayusActive; acc++; }
    } else {
      if (mayusActive) { mayusActive = !mayusActive; acc++; }
    }
    return acc
  }, 0)
}
