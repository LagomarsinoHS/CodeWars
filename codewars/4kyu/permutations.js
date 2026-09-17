/**
 * So Many Permutations!
 * Kyu: 4
 *
 * console.log(encryption('HELLO WORLD'));//".... . .-.. .-.. ---   .-- --- .-. .-.. -.."
 */

export function permutations(string) {
  let opciones = [];

  if (string.length === 1) return [string]

  for (let i = 0; i < string.length; i++) {

    let char = string[i];
    let resto = string.slice(0, i) + string.slice(i + 1);


    for (const opcionesRestantes of permutations(resto)) {
      opciones.push(char + opcionesRestantes);
    }
  }

  return opciones;
}
