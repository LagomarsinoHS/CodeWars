/**
 * 99 Bottles of Beer  //
 * Kyu: 7
 *
 * console.log(whatNote("D", 5))
 */

export function sing() {
  let lyrics = ""
  for (let i = 99; i >= 0; i--) {
    if (i == 1) lyrics += `1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \n`
    else if (i == 2) lyrics += `2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. \n`
    else if (i >= 3) lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall. \n`
    else lyrics += `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`
  }
  console.log(lyrics)
  return [lyrics]
}
