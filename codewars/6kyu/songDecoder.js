/**
 * songDecoder
 * Kyu: 6
 *
 * console.log(findMissing([1, 3, 5, 9, 11]))
 */

export function songDecoder(song) {
  let regexp = /wub/gi
  let res = song.replace(regexp, " ")
  if (song.includes("WUBWUB")) {
    res = res.split("  ").join("")
    return res
  } else {
    return res.trim()
  }
}
