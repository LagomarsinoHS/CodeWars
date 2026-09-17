/**
 * Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
 * Kyu: 7
 *
 * console.log(towerBuilder2(3))
 */

export function countDevelopers(list) {
  return list.filter(({ continent, language }) => continent === "Europe" && language === "JavaScript").length
}
