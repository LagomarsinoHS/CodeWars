const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}

const suma = (num, sum = 0) => (
    num === 0 ? sum : () => suma(num - 1, sum + num)
)

const tsuma = trampoline(suma)
const r = tsuma(10000000000000000000000000000000)
console.log(r);