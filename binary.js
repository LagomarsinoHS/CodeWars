const numbers = [7, 3, 6, 2, 4, 1, 5]

/**
 * El orden por selection lo que hace es que cada iteración busca el elemento mas pequeño y lo pone al inicio
 */
function selectionSort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        let minNum = i
        for (let j = i + 1; j < result.length; j++) {


            if (result[j] < result[minNum]) {
                minNum = j
            }
        }
        [result[i], result[minNum]] = [result[minNum], result[i]]
    }
    
    return result
}
console.log(numbers, selectionSort(numbers))