
//Crear una funcion que dependiendo del 2do parámetro los agrupe en un objeto

console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }
console.log(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
], 'rating'))
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }

console.log(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
))
// { 2013: [1363223700000], 2014: [1397639141184] }

// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }

function byFunction(arr, fn) {
    return arr.reduce((acc, ele) => {
        if (!acc.hasOwnProperty(fn(ele))) acc[fn(ele)] = []
        acc[fn(ele)].push(ele)
        return acc
    }, {})
}
function byKey(arr, key) {
    return arr.reduce((acc, ele) => {
        if (!acc[ele[key]]) acc[ele[key]] = []
        acc[ele[key]].push(ele)
        return acc
    }, {})
}
function byLength(arr) {
    let obj = {}
    for (const item of arr) {
        if (!obj.hasOwnProperty(item.length)) obj[item.length] = []
        obj[item.length].push(item)
    }
    return obj
}

function groupBy(arr, ite) {
    if (typeof ite === 'function') return byFunction(arr, ite)
    if (ite === 'length') return byLength(arr)
    return byKey(arr, ite)
}


/*
!Version elegante
function groupBy(arr, ite) {
    const obj = {}
    for (const value of arr) {
        const key = typeof ite === 'function' ? ite(value) : value[ite]
        key in obj ? obj[key].push(value) : (obj[key] = [value])
    }
    return obj
}
*/