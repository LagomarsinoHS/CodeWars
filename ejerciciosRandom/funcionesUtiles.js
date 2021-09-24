
const convertToRoman = (num) => {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanized = "";

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
};

const convertToRoman2 = (num) => {
    const getNumeral = (digit, lowStr, midStr, nextStr) => {
        switch (true) {
            case digit <= 3:
                return lowStr.repeat(digit);
            case digit === 4:
                return lowStr + midStr;
            case digit <= 8: // digits 5-8
                return midStr + lowStr.repeat(digit - 5);
            default: // digit 9
                return lowStr + nextStr
        }
    }

    let str = ""

    // Thousands
    str += "M".repeat(Math.floor(num / 1000));
    num %= 1000;

    // Hundreds
    str += getNumeral(Math.floor(num / 100), 'C', 'D', 'M')
    num %= 100;

    // Tens
    str += getNumeral(Math.floor(num / 10), 'X', 'L', 'C')
    num %= 10;

    // Ones
    str += getNumeral(num, 'I', 'V', 'X')

    return str;
};

//Funcion que te retorna una cantidad definida de numeros de la lista fibonacci
const serieFibonacci = num => {
    let result = [0, 1]
    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}
//0 1 1 2 3 5 8....

//Conseguir X numero de la lista fibonacci, con programacion dinamica
const getNthFibonacciDynamicProgramming = (num, memo = {}) => {
    if (memo.hasOwnProperty(num)) return memo[num];
    if (num <= 2) return 1;
    memo[num] = getNthFibonacciDynamicProgramming(num - 1, memo) + getNthFibonacciDynamicProgramming(num - 2, memo);
    return memo[num];
}

//funcion que aplana el array no importa cuantos niveles tenga
const flattener = (arr) => {
    const flatten = (acc, ele) => {
        if (Array.isArray(ele)) return ele.reduce(flatten, acc)
        return [...acc, ele]
    }
    const res = arr.reduce(flatten, [])
    return res
}
//input ->[1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]
//output -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Permite mezclar el arreglo
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());




module.exports = {
    convertToRoman,
    convertToRoman2,
    serieFibonacci,
    flattener,
    getNthFibonacciDynamicProgramming,
    shuffleArray
}
