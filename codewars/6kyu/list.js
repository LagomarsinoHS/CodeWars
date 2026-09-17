/**
 * Format a string of names like 'Bart, Lisa & Maggie
 * Kyu: 6
 *
 * console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
 */

export function list(arr) {
  if (!arr.length) return ''
  const validaName = names => {
    if (names.length == 1) return names[0]
    if (names.length == 2) return `${names[0]} & ${names[1]}`
    const firstNames = names.slice(0, names.length - 2).join(", ")//names.join(", ")
    return `${firstNames}, ${names[names.length - 2]} & ${names[names.length - 1]}`
  }
  const names = arr.map((x) => x.name)
  return validaName(names)
}

export function list2(names) {
  return names.reduce((prev, current, index, array) => {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}
