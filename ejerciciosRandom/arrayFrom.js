/* const createFakeData = () => {
    let data = []
    for (let i = 0; i < 10_000_000; i++) {
        //data.push({ id: i, userId: `user_${i}` })
        data.push(i)
    }
    return data
}


const fakeData = createFakeData()


console.time('normal Operation')
const resNormalOperation = fakeData.map(x => x * 2)
console.timeEnd('normal Operation')



console.time('ArrayFrom Operation')
const resArrayFromOperation = Array.from(fakeData, x => x * 2)
console.timeEnd('ArrayFrom Operation') */

let N=100_000_000
let tabIndex=[ ...Array(N).keys()]

function doubleIt(x){
    return 2*x;
}

console.time('Map')
tabIndex.map(doubleIt);
console.timeEnd('Map')

console.time('ArrayFrom')
Array.from(tabIndex, doubleIt)
console.timeEnd('ArrayFrom')
