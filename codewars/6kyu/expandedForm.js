/**
 * Write Number in Expanded Form
 * Kyu: 6
 *
 * console.log(toCamelCase("The-Stealth-Warrior"))// 'TheStealthWarrior'
 */

export function expandedForm(num) {
  const give0 = num => '0'.repeat(num.toString().length - 1)

  const result = []
  const numToStr = num.toString()
  for (const idx in numToStr) {
    const numS = numToStr[idx]
    if (numS === '0') continue;
    else {
      const corte = numToStr.slice(idx)
      result.push(`${numS}${give0(corte)}`)
    }
  }
  return result.join(' + ')
}
