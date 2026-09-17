/**
 * The Office II - Boredom Score
 * Kyu: 7
 */

export function boredom(staff) {
  const departments = { accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6, change: 6, IS: 8, retail: 5, cleaning: 4, "pissing about": 25 };

  let count = 0
  for (const key in staff) {
    const department = staff[key]
    count += departments[department]
  }
  return count <= 80
    ? 'kill me now'
    : count > 80 && count < 100
      ? 'i can handle this'
      : 'party time!!'
}
