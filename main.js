'use strict'
//Nombre Ejercicio: Does my number look big in this?
function narcissistic(value) {
    // Code me to return true or false
    let largoNum = value % 10
    let numeros = value.toString().split("").map(e => parseInt(e))
    let valor = 0;
    console.log(numeros)
    if (largoNum == 1) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false

    } else if (largoNum == 2) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    } else if (largoNum == 3) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 4) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 5) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 6) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 7) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 8) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
    else if (largoNum == 9) {
        valor = numeros.reduce((acc, num) => {
            return acc += Math.pow(num, largoNum)
        }, 0)
        return valor == value ? true : false
    }
}
console.log(narcissistic(9474));

//Nombre Ejercicio: Highest and Lowest
function highAndLow(numbers) {
    // ...
    let numero = numbers.split(" ")
    console.log(numero);
    let result = Math.max(...numero) + " " + Math.min(...numero)
    return result
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

//Nombre Ejercicio: Friend or Foe?
function friend(friends) {
    //your code here
    return friends.filter(friend => friend.length == 4)

}
console.log(friend(["Ryan", "Kieran", "Mark"]));

//Nombre Ejercicio: Two to One
function longest(s1, s2) {
    let reg = /[a-z]/i
    let s3 = [...s1, ...s2]
    let arrayFinal = []
    for (let pal of s1 + s2) {
        if (reg.test(pal) && !arrayFinal.includes(pal)) {
            arrayFinal.push(pal)
        }
    }
    return arrayFinal.sort().join("")
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))


//Nombre Ejercicio: Beginner Series #3 Sum of Numbers
function getSum(a, b) {
    if (a == b) return a
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let total = 0
    for (let i = min; i <= max; i++) {
        total += i
    }
    return total
}
console.log(getSum(5, 1))
console.log("-------------")
//Nombre Ejercicio: Sort the odd (6 kyu)

function sortArray(array) {
    let arrImparOrdenado = [...array].filter(e => e % 2 !== 0).sort((a, b) => a - b)
    return array.map(e => {
        if (e % 2 !== 0) {
            e = arrImparOrdenado.shift()
        }
        return e
    })
}
console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]
console.log("------------------------")

function arrayDiff(a, b) {
    //return a.filter(ele=>b.includes(ele)==false)
    let arr = []
    for (let numa of a) {
        if (!b.includes(numa)) {
            arr.push(numa)
        }
    }
    return arr
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2])) //[1,3]
console.log(arrayDiff([-6, -19, -6, 4, 0], [0, -6, -19]))

console.log("------------------------")
//Ejercicio Nombre: Unique In Order

var uniqueInOrder = function (iterable) {
    //Transformo el string a un arreglo de letras, de esta manera puedo usar el filter
    iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
    return iterable.filter(function (e, i, arr) {
        return e !== arr[i + 1];
    });
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']
console.log("---------------------")


//Nombre Ejercicio: Turkish Numbers, 0-99
const getTurkishNumber = (num) => {
    let largoNum = num.toString().length
    let numTurko = {
        0: "sıfır", 1: "bir", 2: "iki", 3: "üç", 4: "dört", 5: "beş", 6: "altı", 7: "yedi", 8: "sekiz", 9: "dokuz", 10: "on", 20: "yirmi", 30: "otuz", 40: "kırk", 50: "elli", 60: "altmış", 70: "yetmiş", 80: "seksen", 90: "doksan"
    }
    if (num in numTurko) {
        return numTurko[num]
    } else {
        let str = ""
        str += numTurko[num.toString()[0] + 0] + " " + numTurko[num.toString()[1]]
        return str
    }
}
console.log(getTurkishNumber(16))
console.log("---------------------------")
//Nombre Ejercicio: Filling an array (part 2)
const squares = n => {
    let arr = []
    for (let index = 1; index <= n; index++) {
        arr.push(index * index)
    }
    return arr
}

const range = (n, start, step) => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(start)
        start += step
    }
    return arr
}

const random = (n, min, max) => {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(Math.floor(Math.random() * ((max + 1) - min) + min))
    }
    return arr
}
console.log(squares(5))
console.log(range(6, 3, 2))
console.log(random(4, 5, 10))

console.log("---------------------------")
//Nombre Ejercicio: String ends with

function solution(str, ending) {
    let subString = str.substr((str.length - ending.length), ending.length)
    //return subString == ending ? true : false
    return str.endsWith(ending) ? true : false
}
console.log(solution('abc', 'bc'))
console.log(solution('abcdfghuyddfs', 'ddfs'))

console.log("------------------------")
//Nombre Ejercicio: Count characters in your string

function count(string) {
    // The function code should be here
    let arrCadena = string.split("")
    let objeto = {}
    for (let letra of arrCadena) {
        if (!Object.keys(objeto).includes(letra) && letra != " " && letra != ",") {
            objeto[letra] = 1
        } else if (Object.keys(objeto).includes(letra) && letra != " " && letra != ",") {
            objeto[letra]++
        }
    }
    return objeto
}
function count2(string) {
    return string.split("").reduce((acc, letra) => {
        if (letra != " " && letra != ",") acc[letra] ? acc[letra]++ : acc[letra] = 1
        return acc
    }, {})
}

let cadena = "hola como estas, yo bien"
console.log(count2(cadena))

console.log("-----------------------")
//Nombre Ejercicio: Create Phone Number (6 kyu)

function createPhoneNumber(numbers) {
    /*  console.log(numbers.join(""))
     let number = "("
     for (let i = 0; i < 3; i++) {
         number += numbers[i]
     }
     number += ") "
     for (let i = 3; i < 6; i++) {
         number += numbers[i]
     }
     number += "-"
     for (let i = 6; i < numbers.length; i++) {
         number += numbers[i]
     }
     return number */

    /*  let nume = numbers.join("")
     return "(" + nume.slice(0, 3) + ") " + nume.slice(3, 6) + "-" + nume.slice(6) */

    return numbers.reduce((acc, num) => {
        return acc.replace("x", num)
    }, "(xxx) xxx-xxxx")
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

console.log("-----------------------")
//Nombre Ejercicio: Detect Pangram (6 kyu)
function isPangram(string) {
    /*  let rege = /[a-z]/i
     let str = new Set([...string].map(e=>e.toLowerCase()).filter(e => rege.test(e)))
     console.log([...str].length)
     console.log([...str])
     return [...str].length == 26 ? true : false */

    return "abcdefghijklmnopqrstuvwxyz".split("").every(letra => string.includes(letra))
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
//console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))

console.log("----------------------------------------------")
//Nombre Ejercicio: Replace With Alphabet Position (6kyu)

function alphabetPosition(text) {
    let alf = "0abcdefghijklmnopqrstuvwxyz"
    let arr = text.toLowerCase().split("")
    let res = []
    arr.forEach(e => {
        if (alf.includes(e)) {
            let pos = alf.indexOf(e)
            res.push(pos)
        }
    })
    return res.join(" ")
}
//Otra Forma y mejor
function alphabetPosition2(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.includes(t))
        .map(t => letters.indexOf(t) + 1)
        .join(' ');
}
console.log(alphabetPosition2("The sunset sets at twelve o' clock."))

console.log("------------------------------")
//Ejercicio Name: Find all occurrences of an element in an array

const findAll = (array, n) => {
    /* let arr = []
    array.forEach((ele,index)=>ele==n?arr.push(index):0)
    return arr */
    //Con reduce
    return array.reduce((acc, ele, index) => {
        if (ele == n) acc.push(index)
        return acc

    }, [])
    //Ojo con este
    /* array.reduce((pre, val, idx) => val === n ? [...pre, idx] : pre, []); */
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)) //->2,4

console.log("------------------------")
function duplicateCount(text) {
    let res = text.split("").reduce((acc, letra) => {
        acc[letra] ? acc[letra]++ : acc[letra] = 1
        return acc
    }, {})
    let count = 0
    for (let i in res) {
        if (res[i] > 1) count++
    }
    return count
}

console.log(duplicateCount("aabbcde"))

console.log("----------------")
//Nombre Ejercicio: Find the odd int

const findOdd = (arr) => {
    let a = arr.reduce((acc, ele) => {
        acc[ele] ? acc[ele]++ : acc[ele] = 1
        return acc
    }, {})
    for (let item in a) {
        if (a[item] % 2 == 1) return Number(item)
    }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

console.log("---------------------------")
//Nombre Ejercicio: Find the missing term in an Arithmetic Progression (6kyu)

const findMissing = (list) => {
    let listLen = list.length;
    let iter = (list[listLen - 1] - list[0]) / listLen;
    for (let i = 0; i < listLen; i++) {
        let next = list[i] + iter
        if (next != list[i + 1]) {
            return next;
        }
    }
}
console.log(findMissing([1, 3, 5, 9, 11]))


function songDecoder(song) {
    let regexp = /wub/gi
    let res = song.replace(regexp, " ")
    if (song.includes("WUBWUB")) {
        res = res.split("  ").join("")
        return res
    } else {
        return res.trim()
    }
}
console.log(songDecoder("AWUBBWUBC"))

console.log("------------------------")

/* String.prototype.camelCase = function () {
    return this.split("")
        .map((e, i, arr) => {
            if (i == 0 || arr[i - 1] == " ") {
                e = e.toUpperCase()
            }
            return e
        })
        .filter(e=>e!= " ")
        .join("")
        .trim()        
} */
String.prototype.camelCase = function () {
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("")
}

console.log(" camel case word".camelCase())
console.log("------------------------------");

//Nombre Ejercicio: Greed is Good (5 Kyu)
function score(dice) {
    let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0
    let total = 0
    dice.map(e => {
        switch (e) {
            case 1: uno++
                break;
            case 2: dos++
                break;
            case 3: tres++
                break;
            case 4: cuatro++
                break;
            case 5: cinco++
                break;
            case 6: seis++
                break;
        }
    })
    if (uno > 2) total += 1000, uno -= 3
    if (seis > 2) total += 600
    if (cinco > 2) total += 500, cinco -= 3
    if (cuatro > 2) total += 400
    if (tres > 2) total += 300
    if (dos > 2) total += 200
    total += (100 * uno)
    total += (50 * cinco)
    return total
}

console.log(score([1, 1, 1, 1, 2]))

let datos = [2, 4, 5, 6].map(e => e = "asd")
console.log(datos)

console.log("-----------------------------")
//Ejercicio Nombre: Find The Parity Outlier (6 kyu)

function findOutlier(integers) {
    let par = [], impares = []
    integers.filter(e => e % 2 == 0 ? par.push(e) : impares.push(e))
    return par.length == 1 ? par[0] : impares[0]
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

console.log("--------------------------")
//Nombre Ejercicio N-th Power (8 kyu)

function index(array, n) {
    if (array.length - 1 < n) return -1

    let res = array.map((e, i) => {
        if (i == n) return e = Math.pow(e, n)
    }).filter(e => e).join("")
    return Number(res)

    //return array.length - 1 < n ? -1 : Math.pow(array[n], n)
    //return array[n] **n || -1
}

console.log(index([1, 2, 3, 4], 2))

console.log("----------------------")
//Nombre Ejercicio: Can we divide it? (8kyu)

function isDivideBy(number, a, b) {
    return number % a == 0 && number % b == 0 ? true : false
}

console.log("----------------")
//Ejercicio Name: Stringing me along ()6 kyu
/* 
function createMessage(str) {
    if (!this.str) this.str = "";
    if (str) {
        this.str += str + " ";
        return createMessage;
    } else {
        return this.str;
    }
}
console.log(createMessage("Hello")("World!")("how")("are")("you?")())
 */
console.log("----------------------")
//Ejercicio Name: Middle me (7kyu)
function middleMe(N, X, Y) {
    let str = ""
    /*     if (N % 2 != 0) return X
        for (let i = 0; i <= N; i++) {
            if (i == N / 2) str += X
            else str += Y
        }
        return str*/
    str = Y.repeat(N / 2)
    return N % 2 != 0 ? X : str + X + str
}
console.log(middleMe(19, 'z', '#'))

console.log("---------------------")

function sumStrings(a, b) {
    let res = []
    let largo = a.length

    for (let i = 0; i < largo; i++) {
        let sum;
        sum = (Number(a[i]) + Number(b[i])).toString()
        res.push(sum)
    }
    return res.join("")
}
console.log(sumStrings("123", "456"))

console.log("--------------")
//Nombre Ej: Simple consecutive pairs (7kyu)
function pairs(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) count++
    }
    return count
};
function pairs2(ar, count = 0) {
    for (let i = 0; i < ar.length; i += 2) {
        Math.abs(ar[i] - ar[i + 1]) == 1 ? count++ : count
    }
    return count
}
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))
console.log("---------------")

console.log("-------------");
//Ejercicio Name: Moving Zeros To The End (5kyu)

const moveZeros = (arr) => {
    /*    let res = arr.filter(e => e !== 0)
       console.log(res);
       let cero = arr.length - res.length
       for (let i = 1; i <= cero; i++) {
           res.push(0)
       }
       return res */
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))
}

console.log(moveZeros([1, 2, 0, 1, false, true, 0, 1, 0, 3, 0, 1]));

console.log("--------------");
function scramble(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            console.log(`letra ${str2[i]} si se encontro`);
            str1 = str1.replace(str2[i], "")
        } else {
            console.log(`letra ${str2[i]} NO se encontro`);
            return false
        }
    }
    return true
}
console.log(scramble('javsaripts', 'javascript'));

console.log("---------------")
//Ejercicio Nombre: Ranking System(6 kyu)
function rankings(arr) {
    console.log(arr)
    let rank = [...arr].sort((a, b) => b - a)
    return arr.map(e => e = rank.indexOf(e) + 1 + "°")
}
console.log(rankings([3, 4, 1, 2, 5]))

console.log("------------------------");
function rot13(str) {
    console.log(str);
    let alpma = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alpmi = "abcdefghijklmnopqrstuvwxyz"
    let cont = 0;
    return [...str].map(e => {
        if (/[A-Z]/.test(e)) {
            if (alpma.indexOf(e) + 13 >= 26) {

                cont = (alpma.indexOf(e) + 13) - 26
                return e = alpma[cont]
            } else return e = alpma[alpma.indexOf(e) + 13]
        }
        else if (/[a-z]/.test(e)) {
            if (alpmi.indexOf(e) + 13 >= 26) {
                cont = (alpmi.indexOf(e) + 13) - 26
                return e = alpmi[cont]
            } else return e = alpmi[alpmi.indexOf(e) + 13]
        } else return e
    }).join("")
}
console.log(rot13("EBG13 rknzcyr."));// "ROT13 example.";

console.log("-----------------------");
//Ejercicio Name: Where is my parent!? (6 kyu)
function findChildren(dancingBrigade) {
    let orden = [...dancingBrigade].sort()
    let size = orden.length
    let min = orden.filter(e => /[a-z]/.test(e))
    min.map(e => {
        let pos = orden.indexOf(e.toUpperCase())
        orden.splice(pos + 1, 0, e)
    })
    orden.length = size
    console.log(orden.length);
    return orden.join("")

};

const findChildren2 = dancingBrigade =>
    dancingBrigade
        .split('')
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
        .join('')

console.log(findChildren2("beeeEBb"));
console.log("-------------------------------")

//Ejercicio Name: Is he gonna survive? (8 kyu)
const hero = (bullets, dragons) => {
    return bullets / 2 >= dragons ? true : false
}
console.log(hero(10, 5))

console.log("------------------------")
//Ejercicio Name: GCD sum (7 kyu)
const solve = (sum, gcd) => {
    if (sum % gcd !== 0) return -1
    return [gcd, sum - gcd]
}
console.log(solve(6, 3))
console.log(solve(8, 2))

console.log("----------");

const solve2 = (str) => {
    console.log(str)
    let str2 = str.replace(/[A-z]/g, "-").split("-")
    return Math.max(...str2)
}
console.log(solve2("gh12cdy695m1"));

console.log("-------------");
//Ejercicio Name: Say Me Please Operations (7 kyu)

function sayMeOperations(str) {
    console.log(str);
    let str2 = str.split(" ").map(e => Number(e))
    let res = "";
    for (let i = 0; i < str2.length; i++) {
        let n0 = str2[i],
            n1 = str2[i + 1],
            n2 = str2[i + 2]

        if (n2 || n2 === 0) {
            if (n0 + n1 === n2) res += "addition, "
            else if (n0 - n1 === n2) res += "subtraction, "
            else if (n0 * n1 === n2) res += "multiplication, "
            else res += "division, "
        }
    }
    return res.trim().replace(/.$/, "")

}
console.log(sayMeOperations("10 2 5 -3 -15 12"));
//division, subtraction, multiplication, subtraction"

console.log("------------------");
//Ejercicio Name: Regex validate PIN code(7 kyu)
const validatePIN = (pin) => {
    if (/^\d{4}$|^\d{6}$/.test(pin)) return true
    return false
}
console.log(validatePIN("12345"));
console.log("-------")
//Ejercicio Name: Two Oldest ages (7 kyu)
function twoOldestAges(ages) {
    /* ages.sort((a, b) => a - b)
    return [ages[ages.length - 2], ages[ages.length - 1]] */
    return ages.sort((a, b) => a - b).slice(-2)
}
console.log(twoOldestAges([1, 2, 10, 8]))
console.log("------------")

//Ejercicio Name: Complementary DNA (7 kyu)
function DNAStrand(dna) {
    let compl = { A: "T", T: "A", G: "C", C: "G" }
    return [...dna].map(e => compl[e])
}
console.log(DNAStrand("ATTGC"))//TAACG

console.log("-----------------")

console.log("-----------------------");
//Ejercicio Name: Word values (7kyu)
const wordValues = (str) => {
    const VALORES = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
        o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    return str.map((val, idx) => (val.match(/\w/g) || []).reduce((pre, val) => pre + VALORES[val], 0) * ++idx)
}
console.log(wordValues(["abc", "abc abc"]));
console.log("-----------------------");
//Ejercicio Name: Simple Fun #176: Reverse Letter (7 kyu)
const reverseLetter = str => {
    return str.match(/[a-z]/gi).reverse().join("")
}
console.log(reverseLetter("ultr53o?n"));
console.log("------------");
function isInMiddle(seq) {
    let pos = seq.match(/(abc)/)
    return pos
}
console.log(isInMiddle("AAabcBB"));
console.log(isInMiddle("AabcBBB"));

console.log("----------------------")
//Ejercicio Name: Grasshopper - Summation (8 kyu)
const summation = function (num) {
    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i
    }
    return res
}
console.log(summation(6))

console.log("-------------------")
//Ejercicio Name: Generate range of integers (8 kyu)
function generateRange(min, max, step) {
    let res = []
    for (let i = min; i <= max; i = i + step) res.push(i)
    return res
}
console.log(generateRange(2, 10, 2))
console.log("-------------------------")
//Ejercicio Name: Leaderboard climbers (6 kyu)
function leaderboardSort(leaderboard, changes) {
    for (let change of changes) {
        const [nombre, numero] = change.split(" ")
        let pos = leaderboard.indexOf(nombre)
        let newPos = pos - Number(numero)
        leaderboard.splice(pos, 1)
        leaderboard.splice(pos - newPos, 0, nombre)
    }
    return leaderboard
}
console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1']))

console.log("-------------")

//Ejercicio Name: Recycle (7 kyu)
function recycleMe(recycle) {
    let res = [0, 0, 0]
    recycle.map(e => e > 0 ? res[0]++ : e < 0 ? res[1]++ : res[2]++)
    return res;
}
console.log(recycleMe([5, -9, 0, 6, -84, -95, 15]))
console.log("----------------------------------------------------")
//Ejercicio Name: Sequence convergence (6 kyu)
function convergence(n) {
    console.log(n)
    let res = [n]
    console.log("ultima pos: ", res[res.length - 1])
    for (let i = 1; i < 15; i++) {
        let ultimaPos = res[res.length - 1]
        if (ultimaPos < 10) res.push(ultimaPos + ultimaPos)
        else {
            console.log("ultimo numero en el arr: ", ultimaPos)
            let sum = 0;
            let num = ultimaPos
            let numStr = ultimaPos.toString()
            console.log("1: ", numStr[0], "2: ", numStr[numStr.length - 1])
            sum = numStr[0] * (numStr[numStr.length - 1] == 0 ? 1 : numStr[numStr.length - 1])
            console.log("sum ", sum)
            console.log("num", num)
            res.push(num + sum)

        }
    }
    res = res.filter(e => e < 26)
    console.log(res)
    return res.length
}
console.log(convergence(500))

console.log("-----------------")
//Ejercicio Name: Simple Pig Latin (6 kyu)
function pigIt(str) {
    return str
        .split(" ")
        .map(e => {
            if (/\w/.test(e)) {
                let primeraLetra = e.slice(0, 1)
                return e = e.slice(1, e.length) + primeraLetra + "ay"
            } else return e
        })
        .join(" ")
}
function pigIt2(str) {
    return str
        .split(" ")
        .map(e => {
            if (/\w/.test(e)) {
                let primeraLetra = e.charAt(0)
                return e.slice(1) + primeraLetra + "ay"
            } else return e
        })
        .join(" ")
}
console.log(pigIt2('Pig latin is cool !'))

console.log("--------------------")
//Ejercicio Name: Invert values (8 kyu)
const invert = array => array.map(e => -e)
console.log(invert([1, 2, 3, 4, 5]))

console.log("--------------------")
//Ejercicio Name: Hungarian Vowel Harmony (easy) (7 kyu)
function dative(word) {
    let filtered = [...word].filter(e => /[eéiíöőüűaáoóuú]/.test(e))
    let res = /[eéiíöőüű]/.test(filtered[filtered.length - 1]) ? "nek" : "nak"
    return word + res
}
function dative2(word) {
    return /[eéiíöőüű]/.test(word) ? word + "nek" : word + "nak"
}
console.log(dative2("szék"))

console.log("--------------------")
//Ejercicio Name: Interview Question (easy) (7 kyu)
function getStrings(city) {
    let citySplit = [...city.toLowerCase()].filter(e => /\S/.test(e)).reduce((acc, i) => {
        acc[i] ? acc[i] += "*" : acc[i] = "*"
        return acc
    }, {})
    let res = []
    for (let item in citySplit) {
        res.push(`${item}:${citySplit[item]}`)
    }
    return res.join(",")
}
console.log(getStrings("Las Vegas"))
console.log("------------------------")
//Ejercicio Name: Mirror, mirror, on the wall... (7 kyu)
function mirror(data) {
    let sort = data.sort((a, b) => a - b)
    return [...sort, ...sort.reverse().slice(1)]
}
console.log(mirror([1])) //[1, 2, 3, 2, 1]

console.log("--------------------")
//Ejercicio Name: Keep Hydrated! (8 kyu)
function litres(time) {
    return Math.floor(time * 0.5)
}
console.log(litres(3))

console.log("---------------------------")
function lifePathNumber(dateOfBirth) {
    const reducir = (num) => {
        let suma = 0;
        console.log("-El Largo del numero es:", num.length, `(${num})`)
        for (let numero of num) {
            console.log("sumando: ", numero)
            suma += Number(numero)
        }
        console.log("Resultado", suma.toString())
        if (suma.toString().length > 1) {
            return reducir(suma.toString())
        }
        return suma
    }

    let [ano, mes, dia] = dateOfBirth.split("-")
    console.log(ano, mes, dia)
    return reducir(reducir(ano) + reducir(mes) + reducir(dia) + "")
}
console.log(lifePathNumber("1879-03-14"))

console.log("----------------")
//Ejercicio Name: L1: Set Alarm (8 kyu)
function setAlarm(employed, vacation) {
    return employed && !vacation
}
console.log(setAlarm(true, false))

console.log("------------------------")
//Ejercicio Name: Shortest Word ( 7kyu)
function findShort(s) {
    return s.split(" ").reduce((acc, ele) => {
        acc < ele.length ? acc : acc = ele.length
        return acc
    }, Infinity)
    //return Math.min(...s.split(" ").map(x=>x.length))
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

console.log("-------------")
function unluckyDays(year) {
    let unlucky = 0;
    for (let i = 1; i <= 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) unlucky++
    }
    return unlucky
}
console.log(unluckyDays(2015))

console.log("---------------------")
//Ejercicio Name: Sum of array singles (7 kyu)
function repeats(arr) {
    let reduced = arr.reduce((acc, num) => {
        acc[num] ? acc[num]++ : acc[num] = 1
        return acc
    }, {})
    let soloUno = Object.entries(reduced).filter(x => x[1] == 1).map(x => Number(x[0])).reduce((acc, num) => acc + num)
    return soloUno
};
function repeats2(arr) {
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, ele) => acc + ele)
};
console.log(repeats2([4, 5, 7, 5, 4, 8]))

console.log("---------------")
//Ejercicio Name: String Task (7 kyu)
function stringTask(s) {
    let res = [...s.toLowerCase()].filter(x => !/[aeiouy]/.test(x)).map(x => "." + x)
    console.log(res)
    return res.join("")
}
function stringTask2(s) {
    return s.toLowerCase().replace(/[aeiouy]/g, "").replace(/./g, v => "." + v)
}
console.log(stringTask("Codewars"))

console.log("---------------------------")

//Ejercicio Name: Evens and Odds (7 kyu)
function evensAndOdds(num) {
    return num.toString(num % 2 ? 2 : 16)
}
console.log(evensAndOdds(1015415))

console.log("--------------")
//Ejercicio Name: Tidy Number (Special Numbers Series #9)(7 kyu)
function tidyNumber(n) {
    let s = n.toString()
    for (let i = 0; i <= s.length; i++) {
        if (s[i] > s[i + 1]) return false
    }
    return true
}
console.log(tidyNumber(1))

console.log("-----------------")
//Ejercicio Name: STRONGN Strong Number (Special Numbers Series #2)(7 kyu)
function strong(n) {
    const fact = x => x <= 1 ? 1 : x * fact(x - 1)
    let nArr = [...n.toString()]
    let a = nArr.reduce((acc, ele) => acc += fact(ele), 0)
    return a == n ? "STRONG!!!!" : "Not Strong !!"
}
console.log(strong(145))

console.log("-------------------")
//Ejercicio Name: Disarium Number (Special Numbers Series #3)(7 kyu)
function disariumNumber(n) {
    let arrN = [...n.toString()]
    return arrN.map((e, i, arr) => Math.pow(e, i + 1)).reduce((acc, ele) => acc + ele) == n ? "Disarium !!" : "Not !!"
}
console.log(disariumNumber(89))

console.log("------------------")
//Ejercicio Name: Balanced Number (Special Numbers Series #1 ) (7 kyu)
function balancedNum(number) {
    let center = number.toString().length / 2
    let left;
    console.log(center)
    if (number.toString().length % 2 === 0) {
        left = number.toString().slice(0, center - 1)
    } else {
        left = number.toString().slice(0, center)
    }
    let right = number.toString().slice(center + 1, number.toString().length)
    console.log(left, right)
    left = [...left].map(Number).reduce((acc, ele) => acc + ele, 0)
    right = [...right].map(Number).reduce((acc, ele) => acc + ele, 0)
    return left === right ? "Balanced" : "Not Balanced"
}
console.log(balancedNum(7))

console.log("---------------------")
//Ejercicio Name: Special Number (Special Numbers Series #5) (7 kyu)
function specialNumber(n) {
    return [...n.toString()].every(x => /[0-5]/.test(x)) == true ? "Special!!" : "NOT!!"
}
console.log(specialNumber(5))

console.log("-----------------------")
//Ejercicio Name: Automorphic Number (Special Numbers Series #6)(7 kyu)
function automorphic(n) {
    console.log(n)
    let cuadrado = Math.pow(n, 2)
    return cuadrado.toString().includes(n) ? "Automorphic" : "Not!!"
}
function automorphic2(n) {
    return (n * n).toString().endsWith(n) ? "Automorphic" : "Not!!"
}
console.log(automorphic2(625))

console.log("-------------------")
//Ejercicio Name: Sum two arraysSum two arrays(6 kyu)
function addArrays(array1, array2) {
    if (array1.length == 0 || array2.length == 0) return []
    console.log(array1, array2)
    let arr = Math.sign(array1[0]) ? array1.join("") : array1.join("") * -1
    let arr2 = Math.sign(array2[0]) ? array2.join("") : array2.join("") * -1
    console.log(arr, arr2)
    console.log(parseInt(arr), parseInt(arr2))
    let res = parseInt(arr) + parseInt(arr2)
    console.log("respuesta", res.toString().split("").map(Number))
    res = res.toString().split("")
    if (res[0] == "-") {
        res.shift()
        res[0] = "-" + res[0]
    }
    console.log(res)
    return res.map(Number)
}
console.log(addArrays([], []))

console.log("---------------------")
//Ejercicio Name: How many consecutive numbers are needed? (7 kyu)
function consecutive(arr) {
    console.log(arr)
    if (arr.length <= 1) return 0
    let cont = 0;
    let numMax = Math.max(...arr)
    let numMin = Math.min(...arr)
    for (let i = numMin; i <= numMax; i++) {
        if (!arr.includes(i)) cont++
    }
    return cont
}
console.log(consecutive([4, 8, 6]))

console.log("--------------")
//Ejercicio Name: Row Weights(7 kyu)
function rowWeights(array) {
    let res = [0, 0]
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) res[0] += array[i]
        else res[1] += array[i]
    }
    return res
}
console.log(rowWeights([80, 150]))

console.log("------------------")
//Ejercicio Name: Nth power rules them all! (7 kyu)
function modifiedSum(a, n) {
    return a.map(x => x ** n).reduce((acc, ele) => acc + ele) - a.reduce((acc, ele) => acc + ele)
}
function modifiedSum2(a, n) {
    return a.reduce((acc, ele) => acc + ele ** n - ele, 0)
}
console.log(modifiedSum2([1, 2, 3], 3))

console.log("----------------------")
//Ejercicio Name: Meeting (6 kyu)
function meeting(s) {

    return s.toUpperCase().split(';').map((str) => {
        return str.split(':').reverse();
    }).sort().map((arr) => {
        return "(" + arr.join(', ') + ")";
    }).join('');

}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

console.log("---------------")
//Ejercicio Name: Dominant array elements (7 kyu)
function dominantArray(arr) {
    let largo = arr.length
    let arreglo = [...arr]
    let res = []
    for (let i = 0; i < largo; i++) {
        console.log("Array", arreglo);
        let num = arreglo.shift()
        console.log("num en turno", num);
        console.log("NumeroMax", Math.max(...arreglo) == -Infinity ? 0 : Math.max(...arreglo))
        if (Math.max(...arreglo) == Infinity ? 0 : Math.max(...arreglo) < num) {
            console.log("entre con", num);
            res.push(num)
        }
        console.log(".------");
    }
    return res
}
function dominantArray2(arr) {
    return arr.filter((num, idx, arrey) => arrey.slice(idx + 1).every(n => n < num))
}
//Itera por cada numero, si el numero iterando es mayor a todo el resto de ellos, lo devuelve (esto pasa por el array.slice que entrega todo el array menos el de idx)
const dominantArray3 = arr => arr.filter((num, idx, array) => num > Math.max(...array.slice(idx + 1)))
console.log(dominantArray3([16, 17, 14, 3, 14, 5, 2]));

console.log("--------------")
//Ejercicio Name Shared Bit Counter (7 kyu)
function sharedBits(a, b) {
    let num = a.toString(2)
    let num2 = b.toString(2)
    let res = false
    let cont = 0
    while (num.length != num2.length) {
        if (num.length < num2.length) num = "0" + num
        else if (num2.length < num.length) num2 = "0" + num2
    }

    for (let i = 0; i < num.length; i++) {
        console.log(i)
        if (num[i] == "1" && num2[i] == "1") cont++
        if (cont >= 2) return true
    }
    return res
}
console.log(sharedBits(43, 77)) //44,77

console.log("---------------------")
//Ejercicio Name: Quarter of the year (8 kyu)
const quarterOf = (month) => {
    switch (true) {
        case month <= 3: return 1
        case month <= 6: return 2
        case month <= 9: return 3
        case month <= 12: return 4
        default:
            break;
    }
}
console.log(quarterOf(3))

console.log("-----------------")
//Ejercicio Name: Unique string characters (7 kyu)
function uniqueString(a, b) {
    let res = ""
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) res += a[i]
    }
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) res += b[i]
    }
    return res
};
const uniqueString2 = (a, b) => {
    return [...a, ...b].filter(x => !a.includes(x) || !b.includes(x)).join("")
}
const uniqueString3 = (a, b) => [...a, ...b].reduce((acc, cur) => {
    return acc += a.includes(cur) && b.includes(cur) ? "" : cur
}, "")
console.log(uniqueString3("xyab", "xzca"))

console.log("-------------")
const getVowels = str => {
    /*     return [...str].reduce((acc, ele) => {
            /[aeiou]/.test(ele) ? acc++ : ""
            return acc
        }, 0) */
    console.log(str.match(/[aeiou]/g))
    return (str.match(/[aeiou]/g) || []).length
}
console.log(getVowels("abracadabra"))

console.log("---------------");
//Ejercicio Name:  Delete occurrences of an element if it occurs more than n times (6 kyu)
function deleteNth(arr, n) {
    let nuevoArr = [...arr]
    let res = arr.reduce((acc, ele) => {
        if (!acc[ele]) acc[ele] = 1
        else (acc[ele]++)
        return acc
    }, {})
    console.log("res", res);
    console.log("nuevoArr", nuevoArr);

    nuevoArr.forEach(ele => {
        while (res[ele] > n) {
            let idx = nuevoArr.lastIndexOf(ele)
            nuevoArr.splice(idx, 1)
            res[ele]--
        }
    })
    return nuevoArr
};
function deleteNth2(arr, x) {
    var obj = {}
    return arr.filter(function (number) {
        obj[number] = obj[number] ? obj[number] + 1 : 1
        return obj[number] <= x
    })
}

console.log(deleteNth([4, 35, 35, 47, 4, 35, 4, 15, 38, 47, 34, 4, 4, 15, 47, 38, 4, 49, 4, 4, 49, 15, 38, 15, 4, 4, 15, 15, 4, 4, 47, 47, 44, 4, 47, 47, 4, 4, 34], 1));

console.log("------------")
//Ejercicio Name: Holiday III - Fire on the boat (7 kyu)
function fireFight(s) {
    //return s.replace(/[F-f]ire/g, v => v="~~")
    return s.replace(/[F-f]ire/g, "~~")
}
console.log(fireFight("Boat Rudder Mast Boat Hull Water fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))

console.log("------------------")
//Ejercicio Name: Figure Out the Notes (7 kyu)
const whatNote = (string, fret) => {
    const letras = ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
    return letras[(letras.indexOf(string.toUpperCase()) + fret) % 12]
};
console.log(whatNote("E", 0))
console.log(whatNote("D", 5))

console.log("----------------")
//Ejercicio Name 99 Bottles of Beer (7 kyu) //No solucionada
const sing = () => {
    let lyrics = ""
    for (let i = 99; i >= 0; i--) {
        if (i == 1) lyrics += `1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \n`
        else if (i == 2) lyrics += `2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. \n`
        else if (i >= 3) lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall. \n`
        else lyrics += `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`
    }
    console.log(lyrics)
    return [lyrics]
};
let song = sing()
console.log(song)

console.log("--------------------")
//Ejercicio Name Simple Fun #136: Missing Values (7 kyu)
function missingValues(arr) {
    let cantNumeros = arr.reduce((acc, ele) => {
        if (!acc[ele]) acc[ele] = 0
        acc[ele]++
        return acc
    }, {})

    let once,
        twice,
        thrice

    let objEntries = Object.entries(cantNumeros)
    for (let [num, cant] of objEntries) {
        if (cant == 1) once = num
        else if (cant == 2) twice = num
        else thrice = num
    }
    return once * once * twice
}

function missingValues2(arr) {
    let cantNumeros = arr.reduce((acc, ele) => {
        if (!acc[ele]) acc[ele] = 0
        acc[ele]++
        return acc
    }, {})

    let once, twice;
    for (let x in cantNumeros) {
        if (cantNumeros[x] == 1) once = x
        if (cantNumeros[x] == 2) twice = x
    }
    return once * once * twice

}
console.log(missingValues2([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]))

console.log("------------------------")
//Ejercicio Name: Move 10 ( 7 kyu )
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}
console.log(moveTen("testcase"))

console.log("------------------------")
//Ejercicio Name: Hells Kitchen ( 7 kyu )
const gordon = s => {
    let word = s.replace(/[a-z]/g, x => {
        if (x == "a") x = "@"
        if (/[eiou]/.test(x)) x = "*"
        return x.toUpperCase()
    }).split(" ").map(x => x + "!!!!").join(" ")
    return word
}
const gordon2 = s => {
    return s.toUpperCase()
        .replace(/[A-Z]+/g, x => x + '!!!!')
        .replace(/[AEIOU]/g, x => x == "A" ? "@" : "*")
}
console.log(gordon2('What feck damn cake'))

console.log("------------------------")
//Ejercicio Name: Pairs of Bears (6 kyu )
function bears(x, s) {
    let pairs = []
    let arrStr = [...s]
    for (let i = 0; i < arrStr.length; i++) {
        const valor = arrStr[i] + arrStr[i + 1]
        if (/8B|B8/g.test(valor)) {
            pairs.push(valor)
            arrStr.splice(i, 1)
        }
    }
    return [pairs.join(""), pairs.length >= x]
}
const bears2 = (x, s) => {
    var pairs = s.match(/(8B)|(B8)/g);
    return [pairs.join(""), pairs.length >= x];
}
console.log(bears2(7, '8j8mBliB8gimjB8B8jlB'))
console.log(bears2(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'))

console.log("------------------------")
//Ejercicio Name: Beginner - Reduce but Grow ( 8 kyu)
const grow = (x) => x.reduce((acc, ele) => acc * ele)
console.log(grow([1, 2, 3]))

console.log("------------------------")
//Ejercico name: Spoonerize Me (7 kyu)
function spoonerize(words) {
    let [palA, palB] = words.split(" ")
    let flag = palA[0]
    palA = palA.replace(palA[0], palB[0])
    palB = palB.replace(palB[0], flag)
    return palA + " " + palB
}
function spoonerize2(words) {
    let [palA, palB] = words.split(" ")
    return [palB[0] + palA.slice(1), palA[0] + palB.slice(1)].join(" ")
}
console.log(spoonerize2("nit picking"))

console.log("------------------------")
//Ejercicio name: Noonerize Me (7 kyu)
function noonerize(numbers) {
    //if (numbers.some(x => typeof x !== "number")) return "Invalid Array"
    if (numbers.some(isNaN)) return "Invalid Array"
    console.log(numbers[1].toString().slice(0))
    let res = [numbers[1].toString()[0] + numbers[0].toString().slice(1), numbers[0].toString()[0] + numbers[1].toString().slice(1)]
    console.log(res)
    return Math.abs((parseInt(res[1]) - parseInt(res[0])))
}
function noonerize2(numbers) {
    let [num1, num2] = numbers.map(String);
    [num1, num2] = [num2[0] + num1.slice(1), num1[0] + num2.slice(1)];
    return num1 && num2 ? Math.abs(num1 - num2) : 'invalid array';
}
console.log(noonerize2([12, 34]))

console.log("-----------------------")
//Ejercicio Name: Double Trouble (7 kyu)
function trouble(x, t) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] + x[i + 1] === t) {
            x.splice(i + 1, 1);
            i--;
        }
    }
    return x;
}
console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7))

console.log("-----------------")
//Ejercicio Name: Chuck Norris I - Push Ups (7 kyu)
function chuckPushUps(string) {
    const validador = str => {
        let res = str.replace(/[A-z|2-9]/g, "")
        return parseInt(res, 2) ? parseInt(res, 2) : res
    }
    if (typeof string !== "string" || string.length == 0) return "FAIL!!"
    if (!string.split(" ").some(x => /\d/.test(x))) return "CHUCK SMASH!!"
    let arrNum = string.split(" ").map(x => validador(x)).filter(Number)
    return Math.max(...arrNum)
}
console.log(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'))
console.log(chuckPushUps("5gnEI2U2Ko2xaDS10103wGZwkqQ9QfdfHJlsOkRvYUuy2110GEBUyUPJDjgdFfGZ10000G1DyripG8cXOzcN6rFl100"))

console.log("----------------")
//Ejercicio Name: Chuck Norris II - One Punch (7 kyu)
const onePunch = (items) => {
    console.log(items)
    return typeof items === "string" && items ? items.split(" ").map(x => x.replace(/[ae]/g, "")).sort().join(" ") : "Broken!"
}
console.log(onePunch("Friend Beer Beard Monkey Laptop"))
console.log(onePunch("ztXiEIDFhXQgWejZwWHgzCpGVpfLQnFUoTxVGrOinwPYSLUqwFTndkaQzhsFGefHHSjIgzSbDBaNohUqTvPGOvZToXJrwxtwchaMjPpgiET"))

console.log("---------------")
//Ejercicio name: Chuck Norris III - Cage Match (7 kyu)
function headSmash(array) {
    if (array.length === 0) return "Gym is empty"
    if (typeof array !== 'object' || array === null) return "This isn't the gym!!"
    return array.map((x) => x.replace(/O/g, " "))
}
console.log(headSmash([
    '*****************************************',
    '***********   _O_   *   _O_   ***********',
    '**  _O_   *  /(.)J  *  /(.)J  *   _O_  **',
    '** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
    '** _( )_  *********************  _( )_ **',
    '******************* X ******************']))

console.log("----------------------------")
//Ejercicio Name: Chuck Norris IV - Bearded Fist (7 kyu)
function fistBeard(arr) {
    return arr.reduce((acc, ele) => {
        ele.forEach(x => acc += String.fromCharCode(x))
        return acc
    }, "")
}
console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]))//'Nunchuks'

console.log("--------------------")
//Ejercicio name: Chuck Norris VI - Shopping with Chuck (7 kyu)
function price(start, soil, age) {
    if (typeof start !== "number" || typeof soil !== "string" || typeof age !== number) return "Chuck is bottomless!"
    
}
