let users = []
let products = []

const ELEM = 1000

let keyBy = (arr, key) => {
    return arr.reduce((acc, ele) => {
        acc[ele[key]] = ele
        return acc
    }, {})
}

for (let i = 0; i < ELEM; i++) {
    users.push({
        id: i,
        nombre: `nombre-${i}`
    })
}

for (let i = 0; i < ELEM; i++) {
    products.push({
        id: i,
        nombre: `nombre-producto-${i}`,
        user_id: Math.floor(Math.random() * ELEM)
    })
}

let keyedUser = keyBy(users, "id")
console.log({ keyedUser })
console.time(1)
/* let mezclados = products.map(product => ({
    ...product,
    user: users.find(user => user.id === product.user_id)
})); */
/* let mezclados = products.map(product => ({
    ...product,
    user: keyedUser[product.user_id]
})); */
console.timeEnd(1);



//console.log(mezclados[mezclados.length - 1])