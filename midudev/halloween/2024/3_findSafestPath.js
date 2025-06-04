/*

Estás atrapado en una pesadilla en la que Freddy Krueger te persigue 😭. El sueño está representado por un laberinto de celdas, donde cada celda tiene un valor numérico que indica el nivel de peligro de esa parte del sueño.

Debes encontrar el camino más seguro (es decir, el que tenga el menor valor total de peligro) desde la esquina superior izquierda hasta la esquina inferior derecha de la matriz.

En este desafío, solo puedes moverte hacia la derecha o hacia abajo (no puedes retroceder ni moverte en diagonal) y debes calcular el nivel total de peligro del camino más seguro.

La pesadilla está representada por una matriz dream de tamaño n x m donde cada celda es un número positivo que representa el nivel de peligro de esa celda en el sueño.

Y tienes que devolver el valor total de peligro del camino más seguro de la esquina superior izquierda (posición [0][0]) a la esquina inferior derecha (posición [n-1][m-1]).

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

const bestPath = findSafestPath(dream) // Devuelve 7
El mejor camino es:
[0, 0] -> 1
[0, 1] -> 3
[0, 2] -> 1
[1, 2] -> 1
[2, 2] -> 1

 1 -> 3 -> 1 -> 1 -> 1 = 7

*/

function findSafestPath(dream) {
  const n = dream.length; // Número de filas
  const m = dream[0].length; // Número de columnas

  // Crear dos arrays para almacenar el peligro acumulado
  let prev = new Array(m).fill(0);
  let curr = new Array(m).fill(0);

  // Inicializar la celda de inicio
  prev[0] = dream[0][0];

  // Llenar la primera fila (solo se puede mover hacia la derecha)
  for (let j = 1; j < m; j++) {
      prev[j] = prev[j - 1] + dream[0][j];
  }

  // Llenar el resto de las filas
  for (let i = 1; i < n; i++) {
      // La primera celda de la fila actual
      curr[0] = prev[0] + dream[i][0];

      // Llenar el resto de la fila actual
      for (let j = 1; j < m; j++) {
          curr[j] = Math.min(prev[j], curr[j - 1]) + dream[i][j];
      }

      // Mover la fila actual a la fila anterior para la próxima iteración
      [prev, curr] = [curr, prev];
  }

  // El valor en la esquina inferior derecha es el nivel total de peligro del camino más seguro
  return prev[m - 1];
}
