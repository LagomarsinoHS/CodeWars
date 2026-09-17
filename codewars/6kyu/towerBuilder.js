/**
 * Build tower
 * Kyu: 6
 *
 * console.log(toTime(3500))
 */

export function towerBuilder(nFloors) {
  if (!nFloors) return []
  let tree = [], cont = 1
  for (let i = 1; i <= nFloors; i++) {
    let str = "*".repeat(cont)
    cont += 2
    tree.push(str)
  }
  let largo = tree[tree.length - 1].length

  let treeFixed = tree.map(floorActual => {
    if (floorActual.length == largo) return floorActual
    let floorLength = largo - floorActual.length
    console.log(floorActual.length, floorLength)

    for (let i = 0; i < floorLength; i++) {
      if (i % 2 == 0) floorActual = ` ${floorActual}`
      else floorActual = `${floorActual} `
    }
    return floorActual
  })
  return treeFixed
}

export function towerBuilder2(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    const spaces = " ".repeat(nFloors - i)
    const x = "*".repeat((i * 2) - 1)
    tower.push(spaces + x + spaces);
  }
  return tower;
}
