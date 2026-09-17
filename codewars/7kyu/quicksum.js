/**
 * Quicksum
 * Kyu: 7
 *
 * console.log(slicesToName(11))
 */

export function quicksum(packet) {
  const alf = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  if (/[^A-Z ]/g.test(packet)) return 0

  return packet.split("").reduce((acc, ele, idx) => {
    return ele === ' ' ? acc : acc + ((idx + 1) * alf.indexOf(ele))
  }, 0)
}
