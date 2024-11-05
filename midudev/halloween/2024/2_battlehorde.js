/*
En una lucha épica entre muertos vivientes 🧟 y humanos 👮‍♂️, ambos bandos tienen una lista de combatientes con poderes de ataque específicos.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando.

El bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo.

En caso de empate, ambos combatientes caen y no afectan a la próxima ronda.

Dadas dos cadenas de texto zombies y humans, donde cada dígito (del 1 al 9) representa el poder de ataque de un combatiente, determina quién queda al final y con cuánto poder de ataque.

Importante: Las dos cadenas siempre tendrán la misma longitud.

La salida es una cadena de texto que representa el resultado final de la batalla.

Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z".
Si queda un humano, devuelve su poder seguido de "h", por ejemplo "2h".
Si hay un empate y ninguno queda con poder al final, devuelve "x".
Aquí tienes un ejemplo:

const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"
Otro ejemplo con un empate:

const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

primera ronda: zombie 4 vs human 2 -> zombie gana (+2)
segunda ronda: zombie 4+2 vs human 8 -> humano gana (+2)
tercera ronda: zombie 4 vs human 2+2 -> empate
resultado: "x"
*/
function battleHorde(zombies, humans) {
  let zombiePower = 0;
  let humanPower = 0;


  for (let i = 0; i < zombies.length; i++) {
    let zombie = Number(zombies[i]) + zombiePower;
    let human = Number(humans[i]) + humanPower;

    zombiePower = 0;
    humanPower = 0;


    zombie > human ? zombiePower = zombie - human : humanPower = human - zombie;
  }

  if (zombiePower === humanPower) return 'x';
  return zombiePower > humanPower ? `${zombiePower}z` : `${humanPower}h`;
}


const zombies = '4598';
const humans = '7682';

const res = battleHorde(zombies, humans)
console.log(res)