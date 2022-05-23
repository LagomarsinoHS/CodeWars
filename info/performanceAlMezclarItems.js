let users = []
let products = []

const ELEM = 10000


//Funcion que indexará la información, tomando la key del objeto como un indice (en este caso la key entregada) y el valor sera toda la información
const keyBy = (arr, key) => {
    return arr.reduce((acc, ele) => {
        acc[ele[key]] = ele
        return acc
    }, {})
}

//Solamente relleno users para el ejemplo
for (let i = 0; i < ELEM; i++) {
    users.push({
        id: i,
        nombre: `nombre-${i}`
    })
}

//Lo mismo pero con products
for (let i = 0; i < ELEM; i++) {
    products.push({
        id: i,
        nombre: `nombre-producto-${i}`,
        user_id: Math.floor(Math.random() * ELEM)
    })
}

//Llamo a la funcion, indicandole con que datos va a trabajar y que key será la utilizada en el objeto. Lo que tengo ahora es un objeto de N largo donde la key será el indice y el valor, todo el valor de la iteración
let keyedUser = keyBy(users, "id")
//console.log({ keyedUser })

console.time("lento")
//Esta forma es lenta ya que por cada producto, debe además buscar el usuario especifico dentro del array, esto puede ser lento
let mezcladosLento = products.map(product => ({
    ...product,
    user: users.find(user => user.id === product.user_id)
}));
console.timeEnd("lento");

console.time("rapido");
//La forma rápida al iterar por el producto cuando toca conseguir el usuario, solo va directamente al indice que se creo y no lo busca por la cantidad total del array de datos
let mezcladosRapido = products.map(product => ({
    ...product,
    user: keyedUser[product.user_id]
}));
console.timeEnd("rapido");

//console.log(mezcladosRapido.at(-1));