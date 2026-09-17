/**
 * Advanced Pig Latin
 * Kyu: 5
 */

export function pigLatin(sentence) {
  const transformWord = word => {
    const isNumber = word => /\d/.test(word)
    const haveVowels = word => /[aeiou]/i.test(word)
    const isFirstVowel = word => /[aeiou]/i.test(word[0])
    const camelCase = word => /[A-Z]/.test(word) ? word[0].toUpperCase() + word.substring(1).toLowerCase() : word
    const sanitizeWord = word => camelCase(word.replace(/([a-zA-Z]+)([.,!?:;]+)([a-zA-Z]+)/, '$1$3$2'));
    const indexOfVowel = word => {
      let position;
      for (let i = 0; i < word.length; i++) {
        const element = word[i];
        if (/[aeiou]/i.test(element)) {
          position = i; break;
        }
      }
      return position;
    }

    if (isNumber(word)) return word
    if (isFirstVowel(word)) return sanitizeWord(`${word}way`)
    if (!haveVowels(word)) return sanitizeWord(`${word}ay`)

    const idxVowal = indexOfVowel(word)
    const wordFixed = word.substring(idxVowal, word.length) + word.substring(0, idxVowal)
    return sanitizeWord(wordFixed + 'ay')

  }
  return sentence.split(" ").map(transformWord).join(" ");
}
