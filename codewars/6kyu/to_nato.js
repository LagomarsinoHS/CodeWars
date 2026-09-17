/**
 * If you can read this...
 * Kyu: 6
 *
 * console.log(likes2(["Peter", "Adrian", "Alex", "Berto"]))
 */

export function to_nato(words) {
  let code = {
    A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot", G: "Golf", H: "Hotel", I: "India",
    J: "Juliett", K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra",
    T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey", X: "Xray", Y: "Yankee", Z: "Zulu"
  }
  return [...words.replace(/\s/g, "")].map(x => x = code[x.toUpperCase()] || x).join(" ")
}
