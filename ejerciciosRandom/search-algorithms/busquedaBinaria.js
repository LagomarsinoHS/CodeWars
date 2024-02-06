
/*
* Binary Search is a faster one that native ones O(logN) vs O(n)
* Normally used on trees or SORTED arrays
*/

// To evoid max call stack problem
const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}


// Generate an array from 0 to 1000 -> [0 ....., 1000]
const longArray = Array.from({ length: 10_000_001 }, (_, i) => i)


const forSearch = (array, valueToSearch) => {
    let time = 0;

    for (let i = 0; i < array.length; i++) {
        time++
        if (array[i] === valueToSearch) break;
    }
    return `It took ${time} units of time to find the result`
}

const findSearch = (array, valueToSearch) => {
    let time = 0;

    array.find(data => {
        time++
        return data === valueToSearch ? true : false
    })
    
    return `It took ${time} units of time to find the result`
}

// Normal BinarySearch
const binarySearch = (array, valueToSearch, time = 0) => {
    const middle = Math.floor(array.length / 2)
    time++
    if (array[middle] === valueToSearch) return `Se demoró ${time} unidades de tiempo en encontrar el resultado`
    else if (array[middle] > valueToSearch) {
        return binarySearch(array.slice(middle, valueToSearch, time))
    } else {
        return binarySearch(array.slice(0, middle), valueToSearch, time)
    }
}

function conBinarySearch(arr, toSearch, count = 0) {
    const start = performance.now();

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        count++
        let mid = Math.floor((left + right) / 2);


        if (arr[mid] === toSearch) break;
        else if (arr[mid] < toSearch) {
            // Si el valor en el punto medio es menor que el objetivo, busca en la mitad derecha
            left = mid + 1;
        } else {
            // Si el valor en el punto medio es mayor que el objetivo, busca en la mitad izquierda
            right = mid - 1;
        }
    }


    const time = performance.now() - start
    return `Se ejecutó >${count}< veces para encontrar el dato, tiempo final -> ${time}`
}


//BinarySearch to be used with trampoline
const binarySearchNew = (array, valueToSearch, time = 0) => {
    const middle = Math.floor(array.length / 2)

    time++
    if (array[middle] === valueToSearch) return `It took ${time} units of time to find the result`
    else if (valueToSearch > array[middle]) {
        return () => binarySearchNew(array.slice(middle), valueToSearch, time)
    } else {
        return () => binarySearchNew(array.slice(0, middle), valueToSearch, time)
    }
}

const valueToSearch = 10_000_000

const resForSearch = forSearch(longArray, valueToSearch)
console.log("For Search ->", resForSearch);

const resFindSearch = findSearch(longArray, valueToSearch)
console.log("Find Search ->", resFindSearch);

//const resBB = busquedaBinaria(arrayLargo, 100)
//console.log("Busqueda Binaria ->", resBB);

const resTrampolineBinarySearch = trampoline(binarySearchNew)(longArray, valueToSearch)
console.log("Binary Search with trampoline ->", resTrampolineBinarySearch);



