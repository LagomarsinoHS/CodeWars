/**
 * Who likes it?
 * Kyu: 6
 *
 * console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]))//'Nunchuks'
 */

export function likes(names) {
  if (!names.length) return "no one likes this"
  if (names.length === 1) return `${names} likes this`
  if (names.length === 2) return `${names.join(" and ")} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names.slice(-1)} like this`
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

export function likes2(names) {
  let templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {left} others like this'
  ];
  let idx = Math.min(names.length, 4);
  return templates[idx].replace(/{name}|{left}/g, x => x === "{name}" ? names.shift() : names.length)
}
