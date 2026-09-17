/**
 * Regex validate PIN code
 * Kyu: 7
 *
 * console.log(sayMeOperations("10 2 5 -3 -15 12"));
 */

export function validatePIN(pin) {
  if (/^\d{4}$|^\d{6}$/.test(pin)) return true
  return false
}
