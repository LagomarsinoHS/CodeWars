/**
 * Chuck Norris III - Cage Match
 * Kyu: 7
 *
 * console.log(onePunch("ztXiEIDFhXQgWejZwWHgzCpGVpfLQnFUoTxVGrOinwPYSLUqwFTndkaQzhsFGefHHSjIgzSbDBaNohUqTvPGOvZToXJrwxtwchaMjPpgiET"))
 */

export function headSmash(array) {
  if (array.length === 0) return "Gym is empty"
  if (typeof array !== 'object' || array === null) return "This isn't the gym!!"
  return array.map((x) => x.replace(/O/g, " "))
}
