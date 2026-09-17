/**
 * Holiday III - Fire on the boat
 * Kyu: 7
 *
 * console.log(deleteNth([4, 35, 35, 47, 4, 35, 4, 15, 38, 47, 34, 4, 4, 15, 47, 38, 4, 49, 4, 4, 49, 15, 38, 15, 4, 4, 15, 15, 4, 4, 47, 47, 44, 4, 47, 47, 4, 4, 34], 1));
 */

export function fireFight(s) {
  //return s.replace(/[F-f]ire/g, v => v="~~")
  return s.replace(/[F-f]ire/g, "~~")
}
