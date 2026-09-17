/**
 * Leaderboard climbers
 * Kyu: 6
 *
 * console.log(generateRange(2, 10, 2))
 */

export function leaderboardSort(leaderboard, changes) {
  for (let change of changes) {
    const [nombre, numero] = change.split(" ")
    let pos = leaderboard.indexOf(nombre)
    let newPos = pos - Number(numero)
    leaderboard.splice(pos, 1)
    leaderboard.splice(pos - newPos, 0, nombre)
  }
  return leaderboard
}
