/**
 * toTime
 * Kyu: 7
 *
 * console.log(inArray3(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
 */

export function toTime(seconds) {
  let hora = Math.floor(seconds / 3600)
  let minutos = Math.floor((seconds % 3600) / 60);
  return `${hora} hour(s) and ${minutos} minute(s)`;
}
