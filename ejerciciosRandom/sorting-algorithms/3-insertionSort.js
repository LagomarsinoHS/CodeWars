/**
 * Al igual que Selection Sort, el algoritmo de ordenación por inserción envuelve tomar un valor y 
 * compararlo con los demás en el arreglo. En este caso, empezamos con el segundo valor en el arreglo y 
 * lo comparamos con el primero. Si este es mayor que el primero, lo insertamos a la izquierda de este y 
 * nos movemos al próximo valor en el arreglo. Comparamos este valor con los valores anteriores hasta encontrar 
 * su lugar en la ordenación. Obtiene un valor y lo pone en el lugar correspondiente; por eso es útil para 
 * ordenar elementos que van entrando poco a poco. No es necesario tener la lista completa al inicio.
 */


const nums = [1, 34, 3, 22, 55, 43, 101, 454, 4, 6, 54, 33, 44, 21, 87];

function insertionSort(arr) {
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        let valToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > valToInsert) {
            arr[j + 1] = arr[j];
            j--;
            count++;
        }

        arr[j + 1] = valToInsert;
    }

    console.log("ticks ->", count);
    return arr;
}

console.log(insertionSort(nums))