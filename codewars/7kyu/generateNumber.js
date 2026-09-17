/**
 * Squad number generator
 * Kyu: 7
 */

export function generateNumber(squad, n) {
  if (!squad.includes(n)) return n;

  let possible = [];

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i + j === n) {
        let candidate = parseInt(`${i}${j}`);
        if (!squad.includes(candidate)) {
          possible.push(candidate);
        }
      }
    }
  }


  return possible.length === 0
    ? null
    : Math.min(...possible)
}
