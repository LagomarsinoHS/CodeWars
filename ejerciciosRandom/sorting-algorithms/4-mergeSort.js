/**
 * Este algoritmo parte de dos conceptos – unir y ordenar. Divide la lista de entrada continuamente hasta
 * que solo tiene muchos arreglos con un elemento. Cada uno de estos sub-arreglos ya están ordenados al 
 * tener solo un elemento. Luego, une dos arreglos y los ordena, hasta tener nuevamente un solo arreglo 
 * con todos los elementos originales ordenados. Es uno de los algoritmos de ordenación con mejor rendimiento, 
 * pero no viene sin su desventaja. Merge sort es, probablemente, el algoritmo más complicado en este artículo. 
 * 
 * Para dividir el trabajo y organizar el algoritmo, es útil crear dos funciones. La primera se encargará de 
 * dividir la lista original en dos recursivamente hasta tener cada elemento de la lista original en su propio 
 * arreglo. A esta le llamaremos mergeSort(arr). La segunda, aceptará dos arreglos previamente ordenados y 
 * devuelve un solo arreglo ordenado. Esta será merge(arr1, arr2).
 */

const nums = [1, 34, 3, 22, 55, 43, 101, 454, 4, 6, 54, 33, 44, 21, 87];

let count = 0;
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        count++
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex++]);
        } else {
            merged.push(right[rightIndex++]);
        }
    }

    return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Ejemplo de uso

console.log(mergeSort(nums)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log("ticks ->", count);

