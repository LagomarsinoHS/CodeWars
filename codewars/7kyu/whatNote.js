/**
 * Figure Out the Notes
 * Kyu: 7
 *
 * console.log(fireFight("Boat Rudder Mast Boat Hull Water fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))
 */

export function whatNote(string, fret) {
  const letras = ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
  return letras[(letras.indexOf(string.toUpperCase()) + fret) % 12]
}
