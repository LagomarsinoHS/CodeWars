/**
 * Quarter of the year
 * Kyu: 8
 *
 * console.log(sharedBits(43, 77)) //44,77
 */

export function quarterOf(month) {
  switch (true) {
    case month <= 3: return 1
    case month <= 6: return 2
    case month <= 9: return 3
    case month <= 12: return 4
    default:
      break;
  }
}
