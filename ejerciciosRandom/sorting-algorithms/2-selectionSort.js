

/**
 * Selection Sort recorre todo el arreglo hasta seleccionar el elemento que cumple con los criterios de 
 * ordenación que hemos impuesto. Por ejemplo, si deseamos ordenar un arreglo compuesto de enteros de manera 
 * ascendente, estaríamos buscando el número más pequeño del arreglo. Luego, lo intercambiamos con el primer 
 * valor del arreglo que no haya sido ordenado. De esta manera, se van creando dos sub-listas, una ordenada y 
 * otra por ordenar.
 */

const nums = [1, 34, 3, 22, 55, 43, 101, 454, 4, 6, 54, 33, 44, 21, 87];

function selectionSort(arr) {
    const result = [...arr];
    let count = 0
    if (arr.length < 2) return result;

    for (let i = 0; i < result.length - 1; i++) {
        let minIdx = i
        for (let j = i + 1; j < result.length; j++) {
            count++

            if (result[minIdx] > result[j]) {
                minIdx = j
            }
        }
        //[result[i], result[minIdx]] = [result[minIdx], result[i]]
        const tmp = result[i]
        result[i] = result[minIdx]
        result[minIdx] = tmp
    }
    console.log("ticks ->", count)
    return result
}

console.log(selectionSort(nums))