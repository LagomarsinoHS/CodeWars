/**
 * Every possible sum of two digits
 * Kyu: 7
 * URL: https://www.codewars.com/kata/5b4e474305f04bea11000148
 *
 * Nota: 7/10
 * - Algoritmo: correcto. Recorre cada par (i, j) con i < j, que es lo que pide el kata.
 * - Big O: O(n²) tiempo y O(n²) espacio (n = cantidad de dígitos). Es óptimo:
 *   hay C(n, 2) = n(n-1)/2 sumas, no se puede bajar de eso.
 * - Legibilidad: clara. Nombres entendibles y la intención se lee fácil.
 * - Detalles a pulir:
 *   - El for externo usa `i <= length`. Esa última vuelta no hace nada
 *     (el interno exige `j < length`), debería ser `i < length`.
 *   - `results` no se reasigna: mejor `const`.
 *   - Estilo inconsistente (punto y coma, espacio en `push (`).
 */

export function digits(n) {
    const numberToString = n.toString();
    let results = []
    for (let i = 0; i <= numberToString.length; i++) {
        for (let j = i + 1; j < numberToString.length; j++) {

            results.push (Number(numberToString[i]) + Number(numberToString[j]))

        }
    }

    return results
}

export function digits2(n) {
    const digits = [...String(n)].map(Number);
    const results = [];

    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            results.push(digits[i] + digits[j]);
        }
    }

    return results;
}