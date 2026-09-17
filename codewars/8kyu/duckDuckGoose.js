/**
 * Duck Duck Goose
 * Kyu: 8
 */

export function duckDuckGoose(players, goose) {
  let position = 0;
  const len = players.length
  while (goose > 1) {
    position++
    if (position >= len) position = 0
    goose--
  }

  return players[position]
}
