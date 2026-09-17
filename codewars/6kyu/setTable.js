/**
 * Setting Places for the Dead
 * Kyu: 6
 */

export function setTable(theDead) {
  //['Yojne', 'Xenna', 'Verap', 'Ebyam', 'Teseb', 'Ycuag', 'Onets', 'Skcaw', 'Yrovi', 'Tpets', 'Lizuf', 'Girnu']

  theDead.length = 12;
  function getEnvironment(ghost) {
    const earthenware = "QUTHCRDMZ";
    const waterfall = "WEVOXING";
    const fireplace = "JFABKPLY";
    const windowsill = "S";

    if (earthenware.includes(ghost[0])) return 'earthenware';
    if (waterfall.includes(ghost[0])) return 'waterfall';
    if (fireplace.includes(ghost[0])) return 'fireplace'
    return 'windowsill';
  }

  const preferenceSeats = {
    earthenware: [0, 1, 11, 2],
    waterfall: [3, 2, 4],
    fireplace: [6, 5, 7],
    windowsill: [9, 10, 8]
  }

  const allSeats = Array.from({ length: 12 }, _ => "_____");


  for (const ghost of theDead) {
    const environment = getEnvironment(ghost)
    if (!environment) {
      console.log("No Ambiente")
      continue;
    }

    let assigned = false
    for (const seat of preferenceSeats[environment]) {
      if (allSeats[seat] === '_____') {
        allSeats[seat] = ghost
        assigned = true
        break;
      }
    }

    if (!assigned) {
      const idx = allSeats.findIndex(seat => seat === '_____')
      allSeats[idx] = ghost
    }
  }

  return allSeats;
}
