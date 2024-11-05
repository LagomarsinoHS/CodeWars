/*
Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica. Tiene una lista de pociones, cada una con un poder asociado,
y quiere combinar dos de ellas para obtener un poder total específico.
Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo, 
debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.

Por ejemplo:

const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]
Si no se encuentra ninguna combinación, devuelve undefined
*/


function createMagicPotion(potions, target) {
  const seen = new Map();

  for (let idx = 0; idx < potions.length; idx++) {
    const potion = potions[idx];
    const need = target - potion;


    if (!seen.has(need)) {
      seen.set(potion, idx);
    } else {
      return [seen.get(need), idx];
    }
  }

  return undefined;
}
const potions = [13, 5, 6, 2]
const goal = 8

const res = createMagicPotion(potions, goal)
console.log(res)