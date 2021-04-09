

function countMoves(numbers) {
    let sigoCondicion = true
    let cont = 0
    let copyArr = [...numbers]

    if (copyArr.every(x => copyArr[0] == x)) return cont

    while (sigoCondicion == true) {

        let idxMayor = copyArr.indexOf(Math.max(...copyArr))
        cont++
        variable = copyArr.map((ele, idx) => {
            ele = "otra cosa"
        })

        if (copyArr.every(x => x == copyArr[0])) sigoCondicion = false
    }
    console.log(copyArr)
    return cont
}

//console.log(countMoves([1, 1, 2, 3]))


let ejemplo = [1, 2, 3, 4]
ejemplo.forEach(x => {

})
console.log(ejemplo)