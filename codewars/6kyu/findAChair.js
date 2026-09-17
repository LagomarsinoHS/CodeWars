/**
 * The Office V - Find a Chair
 * Kyu: 6
 */

export function meeting2(rooms, need) {
  if (need === 0) return "Game On";

  let result = [];
  let totalChairs = 0;

  for (let [occupants, chairs] of rooms) {
    // Calculate the number of free chairs in the current room
    const freeChairs = Math.max(chairs - occupants.length, 0);

    // If we need more chairs than the free chairs available in this room, take all of them
    if (freeChairs >= need - totalChairs) {
      result.push(need - totalChairs);
      return result;
    } else {
      // Otherwise, take all the free chairs from this room
      result.push(freeChairs);
      totalChairs += freeChairs;
    }
  }

  // If not enough chairs have been found, return "Not enough!"
  return totalChairs >= need ? result : "Not enough!";
}
