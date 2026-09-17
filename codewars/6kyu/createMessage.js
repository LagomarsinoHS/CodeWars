/**
 * Stringing me along
 * Kyu: 6
 */

export function createMessage(str) {
  if (!this.str) this.str = "";
  if (str) {
    this.str += str + " ";
    return createMessage;
  } else {
    return this.str;
  }
}
