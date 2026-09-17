/**
 * Chuck Norris IV - Bearded Fist
 * Kyu: 7
 *
 * console.log(headSmash([
 * '*****************************************',
 * '***********   _O_   *   _O_   ***********',
 * '**  _O_   *  /(.)J  *  /(.)J  *   _O_  **',
 * '** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
 * '** _( )_  *********************  _( )_ **',
 * '******************* X ******************']))
 * /
 */

export function fistBeard(arr) {
  return arr.reduce((acc, ele) => {
    ele.forEach(x => acc += String.fromCharCode(x))
    return acc
  }, "")
}
