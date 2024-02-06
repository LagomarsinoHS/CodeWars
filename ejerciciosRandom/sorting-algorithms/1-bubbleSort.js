/**
 * La ordenación de burbuja es uno de los algoritmos mejor conocidos por su terrible rendimiento. 
 * Evalúa la lista por pares. Compara cada elemento con su sucesor y los intercambia si es necesario para que el
 * par esté ordenado.
 * 
 * Este ordenamiento es el peor de todos, lo que hace es:
 * 1. Hacer un loop que pone como limite el ultimo elemento del array
 * 2. Hacer un loop interno que ira desde el 0 hasta el ultimo del array
 * 3. Compara cada uno y si es mayor al siguiente, lo da vuelta
 * 4. Se le agrega una flag <swap> para que en caso de que toda la busqueda del bucle interno no haya habido cambios
 * esto indica que esta ordenado y por ende se sale sin tener que seguir buscando en la iteración del bucle exterior
 */

const nums = [1, 34, 3, 22, 55, 43, 101, 454, 4, 6, 54, 33, 44, 21, 87];

function bubbleSort(arr) {
    let count = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        let swap = true
        for (let j = 0; j < i; j++) {
            count++
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swap = false
            }

        }
        if (swap) break;
    }
    console.log("ticks ->", count)
    return arr;
}
console.log(bubbleSort(nums))