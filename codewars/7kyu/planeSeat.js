/**
 * Holiday II - Plane Seating
 * Kyu: 7
 *
 * console.log(twiceAsOld(36, 7))
 */

export function planeSeat(a) {
  let num = []
  let letter = []
  let res = ""
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) num.push(a[i])
    else letter.push(a[i])
  }
  num = num.join("")
  if (num > 60 || /I|J/i.test(letter)) return "No seat!!"

  if (num <= 20) res += "Front-"
  else if (num < 40) res += "Middle-"
  else res += "Back-"

  if (/[A-C]/i.test(letter)) res += "Left"
  else if (/[D-F]/i.test(letter)) res += "Middle"
  else res += "Right"
  return res
}

export function planeSeat2(a) {
  let num = parseInt(a)
  let letter = a.slice(-1)
  if (num > 60 || /[IJ]/i.test(letter)) return "no Seat!!"
  return `${num <= 20 ? "Front-" : num < 40 ? "Middle-" : "Back-"}${letter <= "C" ? "Left" : letter <= "F" ? "Middle" : "Right"}`
}
