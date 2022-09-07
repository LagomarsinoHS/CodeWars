const directory = [
    { name: "Maggie", age: 14, id: 0, phone: "+12345" },
    { name: "Joseph", age: 24, id: 1, phone: "+12456" },
    { name: "Margaret", age: 11, id: 2, phone: "+12789" },
    { name: "Elizabeth", age: 17, id: 3, phone: "+12345" },
    { name: "Julio", age: 15, id: 4, phone: "+12345" },
    { name: "Kevin", age: 64, id: 5, phone: "+12345" },
    { name: "Martin", age: 71, id: 6, phone: "+12345" },
    { name: "Aaron", age: 80, id: 7, phone: "+12345" },

]

const registrations = [
    { name: "Maggie", age: 14, id: 0, phone: "+12345", email: "maggie@gmail.com", confirmed: true },
    { name: "Elizabeth", age: 17, id: 3, phone: "+12345", email: "elizabeth@gmail.com", confirmed: false },
    { name: "Martin", age: 71, id: 6, phone: "+12345", email: "martin@gmail.com", confirmed: false },
    { name: "Aaron", age: 80, id: 7, phone: "+12345", email: "aaron@gmail.com", confirmed: true },
]

const innerJoinObjectMap = (leftArr, rightArr, key) => {
    const directoryMap = leftArr.reduce((acc, ele) => ({ ...acc, [ele[key]]: ele }), {})
    return rightArr.map(item => ({ ...directoryMap[item.name], ...item }))
}

const innerJoinHashMap = (leftArr, rightArr, key) => {
    const directoryMap = new Map()
    leftArr.forEach(item => directoryMap.set(item[key], item))
    return rightArr.map(item => ({ ...directoryMap.get(key), ...item }))
}
console.time("map")
innerJoin(directory, registrations, 'name')
console.timeEnd("map");

console.time("hashMap")
innerJoin2(directory, registrations, 'name')
console.timeEnd("hashMap");

