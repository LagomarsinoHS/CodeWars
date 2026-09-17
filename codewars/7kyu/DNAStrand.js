/**
 * Complementary DNA
 * Kyu: 7
 *
 * console.log(twoOldestAges([1, 2, 10, 8]))
 */

export function DNAStrand(dna) {
  let compl = { A: "T", T: "A", G: "C", C: "G" }
  return [...dna].map(e => compl[e])
}
