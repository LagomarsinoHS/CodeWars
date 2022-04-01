

function capicua1(num) {
    //Defino una variable la cual tendra mi parametro num en string
    const numeroEnString = num.toString()
    //Defino una variable que contendrá un true o false si se cumple que el numero dado vuelta es igual
    //al que entró a la función
    isCapicua = numeroEnString.split("").reverse().join("") == num

    //Si es verdadero suelto un mensaje
    if (isCapicua) {
        return 'Es Capicua'
        //Si es falso, otro mensaje
    } else {
        return 'No es capicua'
    }

}

function capicua2(num) {
    const numString = num.toString()
    let izq = 0
    let der = numString.length - 1

    while (izq != der) {
        //console.log(numString[izq], numString[der]);
        if (numString[izq] != numString[der]) return 'No es Capicua'

        izq++
        der--
    }
    return 'Es Capicua'
}

//console.log(capicua2(606))


function capicua3(num) {
    let isCapicua = true
    const numString = num.toString()
    const largo = numString.length
    console.log(largo);
    for (let idxIzq = 0, idxqDer = largo - 1; idxIzq < largo; idxIzq++, idxqDer--) {
        console.log(numString[idxIzq], numString[idxqDer])
        if (numString[idxIzq] != numString[idxqDer]) {
            isCapicua = false
            break;
        }
    }

    return isCapicua ? 'Es Capicua' : 'No es Capicua'
}
console.log(capicua3(60056))

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

function getPrimeNumbers(num) {
    const primos = []
    for (let idx = 2; idx <= num; idx++) {
        if (esPrimo(idx)) primos.push(idx)
    }
    return primos
}
console.log(getPrimeNumbers(100));