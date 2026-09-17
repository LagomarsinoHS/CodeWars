/**
 * Chuck Norris II - One Punch
 * Kyu: 7
 *
 * console.log(chuckPushUps("5gnEI2U2Ko2xaDS10103wGZwkqQ9QfdfHJlsOkRvYUuy2110GEBUyUPJDjgdFfGZ10000G1DyripG8cXOzcN6rFl100"))
 * console.log(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'))
 */

export function onePunch(items) {
  console.log(items)
  return typeof items === "string" && items ? items.split(" ").map(x => x.replace(/[ae]/g, "")).sort().join(" ") : "Broken!"
}
