/**
 * Friend or Foe?
 * Kyu: 7
 *
 * console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
 */

export function friend(friends) {
  //your code here
  return friends.filter(friend => friend.length == 4)
}
