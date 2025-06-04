/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. 
La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....
Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, 
se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado 
de la carretera en cada unidad de tiempo:
*/


function cyberReindeer(road, time) {
    const roadStates = [road]
    let currentRoad = road;
    let sPosition = 0
    const roadLength = road.length
    for (let t = 1; t < time; t++) {
        if (t === 5) {
            road = road.replaceAll('|', '*')
        }
        const nextPosition = sPosition + 1
        if (road[nextPosition] !== '|') {
            const before = '.' + road.substring(1, nextPosition)
            const after = road.substring(nextPosition + 1, roadLength)
            currentRoad = `${before}S${after}`
            sPosition = nextPosition
        }
        roadStates.push(currentRoad)
    }
    return roadStates
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/