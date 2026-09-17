/**
 * The Office IV - Find a Meeting Room
 * Kyu: 7
 */

export function meeting(x) {
  const room = x.findIndex(room => room === 'O')
  return room === -1 ? 'None available!' : room
}
