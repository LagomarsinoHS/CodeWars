/**
 * Grasshopper - Terminal game combat function
 * Kyu: 8
 */

export function combat(health, damage) {
  const restHp = health - damage
  return restHp >= 0 ? restHp : 'Health cannot go below 0'
}
