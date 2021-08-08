const serieFibonacci = num => {
    let result = [0, 1]
    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}
//0 1 1 2 3 5 8....

const getNthFibonacci = num => {
    if (num <= 2) return 1
    return getNthFibonacci(num - 1) + getNthFibonacci(num - 2)
}

const getNthFibonacciDynamicProgramming = (num, memo = {}) => {
    if (memo.hasOwnProperty(num)) return memo[num];
    if (num <= 2) return 1;
    memo[num] = getNthFibonacciDynamicProgramming(num - 1, memo) + getNthFibonacciDynamicProgramming(num - 2, memo);
    return memo[num];
}

console.time("fibo1")
//console.log(getNthFibonacci(50));
console.timeEnd("fibo1")

console.log('-----------------------------');

console.time("fibo2")
console.log(getNthFibonacciDynamicProgramming(50));
console.timeEnd("fibo2")
