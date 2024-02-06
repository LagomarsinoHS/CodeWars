

const nums = [1, 34, 3, 22, 55, 43, 101, 454, 4, 6, 54, 33, 44, 21, 87];
let count = 0;
function quickSort(arr) {

    // caso base que parará la recursión ya que un arreglo que solo contiene
    // un elemento, ya está ordenado
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const smaller = [];
    const bigger = [];

    // ya que escogimos el primer elemento como pivote,
    // empezamos a recorrer el arreglo desde el segundo elemento
    arr.forEach((num, idx) => {
        count++
        if (idx === 0) return
        num > pivot ? bigger.push(num) : smaller.push(num)
    });

    // puedes unir las sub-listas ordenadas usando spread de ES6 o .concat(
    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

const quickSort2 = (nums) => {
    // caso base que parará la recursión ya que un arreglo que solo contiene
    // un elemento, ya está ordenado
    if (nums.length < 2) return nums;

    const pivot = nums[0];
    const smaller = [];
    const bigger = [];

    // ya que escogimos el primer elemento como pivote,
    // empezamos a recorrer el arreglo desde el segundo elemento
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) smaller.push(nums[i]);
        else bigger.push(nums[i]);
    }

    // puedes unir las sub-listas ordenadas usando spread de ES6 o .concat(
    return [...quickSort2(smaller), pivot, ...quickSort2(bigger)];
}

//console.log(quickSort(nums))
console.log(quickSort(nums))
console.log("ticks ->", count);
