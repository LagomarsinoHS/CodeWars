/**
 * Printer Errors
 * Kyu: 7
 *
 * console.log(to_nato("If, you can read?"))//India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta
 */

export function printerError(s) {
  let val = 0;
  s.split("").forEach(element => !/[a-m]/g.test(element) ? val++ : "");
  return `${val}/${s.length}`
}
