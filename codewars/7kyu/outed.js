/**
 * The Office I - Outed
 * Kyu: 7
 */

export function outed(meet, boss) {
  const length = Object.keys(meet).length
  const total = Object.keys(meet).reduce((acc, key) => acc + (key === boss ? meet[key] * 2 : meet[key]), 0)
  return total / length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
