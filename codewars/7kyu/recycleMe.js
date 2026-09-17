/**
 * recycleMe
 * Kyu: 7
 *
 * console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1']))
 */

export function recycleMe(recycle) {
  let res = [0, 0, 0]
  recycle.map(e => e > 0 ? res[0]++ : e < 0 ? res[1]++ : res[2]++)
  return res;
}
