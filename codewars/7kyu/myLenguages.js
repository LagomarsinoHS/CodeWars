/**
 * My Language Skills
 * Kyu: 7
 */

export function myLenguages(results) {
  return Object.keys(results)
    .sort((a, b) => results[b] - results[a])
    .filter(leng => results[leng] >= 60)
}
