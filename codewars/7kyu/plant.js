/**
 * Harvest Festival
 * Kyu: 7
 *
 * console.log(planeSeat2('60D')) //'Back-Middle
 * console.log(planeSeat2('17K')) //Front-Right
 */

export function plant(seed, water, fert, temp) {
  console.log(seed, water, fert, temp)
  let res = ""
  if (temp < 20 || temp > 30) {
    console.log("entre")
    return res += ("-".repeat(water) + "".repeat(fert)).repeat(water) + seed
  }
  console.log("sali")
  return res += ("-".repeat(water) + seed.repeat(fert)).repeat(water)
}
