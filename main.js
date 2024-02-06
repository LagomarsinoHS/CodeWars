'use strict'


const codeWars = {
    //Nombre Ejercicio: Does my number look big in this?
    narcissistic(value) {
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
    },
    narcissistic2(value) {
        const arrayOfNums = value.toString().split("")
        const numLength = arrayOfNums.length
        return arrayOfNums.reduce((acc, num) => acc + (Math.pow(parseInt(num), numLength)), 0) === value
    },
    //console.log(narcissistic(9474));

    //Nombre Ejercicio: Highest and Lowest
    highAndLow(numbers) {
        let numero = numbers.split(" ")
        console.log(numero);
        let result = Math.max(...numero) + " " + Math.min(...numero)
        return result
    },
    highAndLow2(numbers) {
        let numeros = numbers.split(" ").sort((a, b) => +b - +a)
        return `${numeros[0]}  ${numeros.at(-1)}`
    },
    //console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

    //Nombre Ejercicio: Friend or Foe?
    friend(friends) {
        //your code here
        return friends.filter(friend => friend.length == 4)
    },
    //console.log(friend(["Ryan", "Kieran", "Mark"]));

    //Nombre Ejercicio: Two to One
    longest(s1, s2) {
        let reg = /[a-z]/i
        let s3 = [...s1, ...s2]
        let arrayFinal = []
        for (let pal of s1 + s2) {
            if (reg.test(pal) && !arrayFinal.includes(pal)) {
                arrayFinal.push(pal)
            }
        }
        return arrayFinal.sort().join("")
    },
    //console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

    //Nombre Ejercicio: Beginner Series #3 Sum of Numbers
    getSum(a, b) {
        if (a == b) return a
        let max = Math.max(a, b)
        let min = Math.min(a, b)
        let total = 0
        for (let i = min; i <= max; i++) {
            total += i
        }
        return total
    },
    //console.log(getSum(5, 1))

    //Nombre Ejercicio: Sort the odd (6 kyu)
    sortArray(array) {
        let arrImparOrdenado = [...array].filter(e => e % 2 !== 0).sort((a, b) => a - b)
        return array.map(e => {
            if (e % 2 !== 0) {
                e = arrImparOrdenado.shift()
            }
            return e
        })
    },
    //console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1, 3, 2, 8, 5, 4]

    arrayDiff(a, b) {
        //return a.filter(ele=>b.includes(ele)==false)
        let arr = []
        for (let numa of a) {
            if (!b.includes(numa)) {
                arr.push(numa)
            }
        }
        return arr
    },
    //console.log(arrayDiff([1, 2, 2, 2, 3], [2])) //[1,3]

    //Ejercicio Nombre: Unique In Order
    uniqueInOrder(iterable) {
        //Transformo el string a un arreglo de letras, de esta manera puedo usar el filter
        iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
        return iterable.filter(function (e, i, arr) {
            return e !== arr[i + 1];
        });
    },
    //console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A','B','C','D','A','B']

    //Nombre Ejercicio: Turkish Numbers, 0-99
    getTurkishNumber(num) {
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
    },
    //console.log(getTurkishNumber(16))

    //Nombre Ejercicio: Filling an array (part 2)
    squares(n) {
        let arr = []
        for (let index = 1; index <= n; index++) {
            arr.push(index * index)
        }
        return arr
    },
    //console.log(squares(2));

    //Generate range of integers (8 kyu)
    range(n, start, step) {
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(start)
            start += step
        }
        return arr
    },
    //console.log(range(3, 1, 1));

    random(n, min, max) {
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(Math.floor(Math.random() * ((max + 1) - min) + min))
        }
        return arr
    },
    //console.log(random(4, 5, 10))

    //Nombre Ejercicio: String ends with
    solution(str, ending) {
        let subString = str.substr((str.length - ending.length), ending.length)
        //return subString == ending ? true : false
        return str.endsWith(ending) ? true : false
    },
    //console.log(solution('abcdfghuyddfs', 'ddfs'))

    //Nombre Ejercicio: Count characters in your string
    count(string) {
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
    },
    count2(string) {
        return string.split("").reduce((acc, letra) => {
            if (letra != " " && letra != ",") acc[letra] ? acc[letra]++ : acc[letra] = 1
            return acc
        }, {})
    },
    //console.log(count2('hola como estas, yo bien'))

    //Nombre Ejercicio: Create Phone Number (6 kyu)
    createPhoneNumber(numbers) {
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
    },
    //console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

    //Nombre Ejercicio: Detect Pangram (6 kyu)
    isPangram(string) {
        /*  let rege = /[a-z]/i
         let str = new Set([...string].map(e=>e.toLowerCase()).filter(e => rege.test(e)))
         console.log([...str].length)
         console.log([...str])
         return [...str].length == 26 ? true : false */

        return "abcdefghijklmnopqrstuvwxyz".split("").every(letra => string.includes(letra))
    },
    //console.log(isPangram("The quick brown fox jumps over the lazy dog."))

    //Nombre Ejercicio: Replace With Alphabet Position (6kyu)
    alphabetPosition(text) {
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
    },
    alphabetPosition2(text) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';

        return text.toLowerCase()
            .split('')
            .filter(t => letters.includes(t))
            .map(t => letters.indexOf(t) + 1)
            .join(' ');
    },
    //console.log(alphabetPosition2("The sunset sets at twelve o' clock."))

    //Ejercicio Name: Find all occurrences of an element in an array
    findAll(array, n) {
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
    },
    //    console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)) //->2,4

    duplicateCount(text) {
        let res = text.split("").reduce((acc, letra) => {
            acc[letra] ? acc[letra]++ : acc[letra] = 1
            return acc
        }, {})
        let count = 0
        for (let i in res) {
            if (res[i] > 1) count++
        }
        return count
    },
    //console.log(duplicateCount("aabbcde"))

    //Nombre Ejercicio: Find the odd int
    findOdd(arr) {
        let a = arr.reduce((acc, ele) => {
            acc[ele] ? acc[ele]++ : acc[ele] = 1
            return acc
        }, {})
        for (let item in a) {
            if (a[item] % 2 == 1) return Number(item)
        }
    },
    //console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

    //Nombre Ejercicio: Find the missing term in an Arithmetic Progression (6kyu)
    findMissing(list) {
        let listLen = list.length;
        let iter = (list[listLen - 1] - list[0]) / listLen;
        for (let i = 0; i < listLen; i++) {
            let next = list[i] + iter
            if (next != list[i + 1]) {
                return next;
            }
        }
    },
    //console.log(findMissing([1, 3, 5, 9, 11]))

    songDecoder(song) {
        let regexp = /wub/gi
        let res = song.replace(regexp, " ")
        if (song.includes("WUBWUB")) {
            res = res.split("  ").join("")
            return res
        } else {
            return res.trim()
        }
    },
    //console.log(songDecoder("AWUBBWUBC"))

    //Nombre Ejercicio: Greed is Good (5 Kyu)
    score(dice) {
        let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0
        let total = 0
        dice.forEach(e => {
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
    },
    //console.log(score([1, 1, 1, 1, 2]))

    //Ejercicio Nombre: Find The Parity Outlier (6 kyu)
    findOutlier(integers) {
        let par = [], impares = []
        integers.filter(e => e % 2 == 0 ? par.push(e) : impares.push(e))
        return par.length == 1 ? par[0] : impares[0]
    },
    //console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

    //Nombre Ejercicio N-th Power (8 kyu)
    index(array, n) {
        if (array.length - 1 < n) return -1

        let res = array.map((e, i) => {
            if (i == n) return e = Math.pow(e, n)
        }).filter(e => e).join("")
        return Number(res)

        //return array.length - 1 < n ? -1 : Math.pow(array[n], n)
        //return array[n] **n || -1
    },
    //console.log(index([1, 2, 3, 4], 2))

    //Nombre Ejercicio: Can we divide it? (8kyu)
    isDivideBy(number, a, b) {
        return number % a == 0 && number % b == 0 ? true : false
    },

    //Ejercicio Name: Stringing me along (6 kyu)
    createMessage(str) {
        if (!this.str) this.str = "";
        if (str) {
            this.str += str + " ";
            return createMessage;
        } else {
            return this.str;
        }
    },
    //console.log(createMessage("Hello")("World!")("how")("are")("you?")())

    //Ejercicio Name: Middle me (7kyu)
    middleMe(N, X, Y) {
        let str = ""
        /*     if (N % 2 != 0) return X
            for (let i = 0; i <= N; i++) {
                if (i == N / 2) str += X
                else str += Y
            }
            return str*/
        str = Y.repeat(N / 2)
        return N % 2 != 0 ? X : str + X + str
    },
    //console.log(middleMe(19, 'z', '#'))

    sumStrings(a, b) {
        let res = []
        let largo = a.length

        for (let i = 0; i < largo; i++) {
            let sum;
            sum = (Number(a[i]) + Number(b[i])).toString()
            res.push(sum)
        }
        return res.join("")
    },
    //console.log(sumStrings("123", "456"))

    //Nombre Ej: Simple consecutive pairs (7kyu)
    pairs(ar) {
        let count = 0;
        for (let i = 0; i < ar.length; i += 2) {
            if (ar[i] + 1 == ar[i + 1] || ar[i] - 1 == ar[i + 1]) count++
        }
        return count
    },
    pairs2(ar, count = 0) {
        for (let i = 0; i < ar.length; i += 2) {
            Math.abs(ar[i] - ar[i + 1]) == 1 ? count++ : count
        }
        return count
    },
    //console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))

    //Ejercicio Name: Moving Zeros To The End (5kyu)
    moveZeros(arr) {
        /*    let res = arr.filter(e => e !== 0)
           console.log(res);
           let cero = arr.length - res.length
           for (let i = 1; i <= cero; i++) {
               res.push(0)
           }
           return res */
        return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))
    },
    //console.log(moveZeros([1, 2, 0, 1, false, true, 0, 1, 0, 3, 0, 1]));

    scramble(str1, str2) {
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
    },
    //console.log(scramble('javsaripts', 'javascript'));

    //Ejercicio Nombre: Ranking System(6 kyu)
    rankings(arr) {
        console.log(arr)
        let rank = [...arr].sort((a, b) => b - a)
        return arr.map(e => e = rank.indexOf(e) + 1 + "°")
    },
    //console.log(rankings([3, 4, 1, 2, 5]))

    rot13(str) {
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
    },
    //console.log(rot13("EBG13 rknzcyr."));// "ROT13 example.";

    //Ejercicio Name: Where is my parent!? (6 kyu)
    findChildren(dancingBrigade) {
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
    },
    findChildren2(dancingBrigade) {
        return dancingBrigade
            .split('')
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
            .join('')
    },
    //console.log(findChildren2("beeeEBb"));

    //Ejercicio Name: Is he gonna survive? (8 kyu)
    hero(bullets, dragons) {
        return bullets / 2 >= dragons ? true : false
    },
    //console.log(hero(10, 5))


    //Ejercicio Name: GCD sum (7 kyu)
    solve(sum, gcd) {
        if (sum % gcd !== 0) return -1
        return [gcd, sum - gcd]
    },
    solve2(str) {
        console.log(str)
        let str2 = str.replace(/[A-z]/g, "-").split("-")
        return Math.max(...str2)
    },
    //console.log(solve(6, 3))

    //Ejercicio Name: Say Me Please Operations (7 kyu)
    sayMeOperations(str) {
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
    },
    //console.log(sayMeOperations("10 2 5 -3 -15 12"));

    //Ejercicio Name: Regex validate PIN code(7 kyu)
    validatePIN(pin) {
        if (/^\d{4}$|^\d{6}$/.test(pin)) return true
        return false
    },
    //console.log(validatePIN("12345"));

    //Ejercicio Name: Two Oldest ages (7 kyu)
    twoOldestAges(ages) {
        /* ages.sort((a, b) => a - b)
        return [ages[ages.length - 2], ages[ages.length - 1]] */
        return ages.sort((a, b) => a - b).slice(-2)
    },
    //console.log(twoOldestAges([1, 2, 10, 8]))

    //Ejercicio Name: Complementary DNA (7 kyu)
    DNAStrand(dna) {
        let compl = { A: "T", T: "A", G: "C", C: "G" }
        return [...dna].map(e => compl[e])
    },
    //console.log(DNAStrand("ATTGC"))//TAACG

    //Ejercicio Name: Word values (7kyu)
    wordValues(str) {
        const VALORES = {
            a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
            o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
        }
        return str.map((val, idx) => (val.match(/\w/g) || []).reduce((pre, val) => pre + VALORES[val], 0) * ++idx)
    },
    //console.log(wordValues(["abc", "abc abc"]));

    //Ejercicio Name: Simple Fun #176: Reverse Letter (7 kyu)
    reverseLetter(str) {
        return str.match(/[a-z]/gi).reverse().join("")
    },
    //console.log(reverseLetter("ultr53o?n"));

    isInMiddle(seq) {
        let pos = seq.match(/(abc)/)
        return pos
    },
    //console.log(isInMiddle("AabcBBB"));

    //Ejercicio Name: Grasshopper - Summation (8 kyu)
    summation(num) {
        let res = 0;
        for (let i = 1; i <= num; i++) {
            res += i
        }
        return res
    },
    //console.log(summation(6))

    //Ejercicio Name: Generate range of integers (8 kyu)
    generateRange(min, max, step) {
        let res = []
        for (let i = min; i <= max; i = i + step) res.push(i)
        return res
    },
    //console.log(generateRange(2, 10, 2))

    //Ejercicio Name: Leaderboard climbers (6 kyu)
    leaderboardSort(leaderboard, changes) {
        for (let change of changes) {
            const [nombre, numero] = change.split(" ")
            let pos = leaderboard.indexOf(nombre)
            let newPos = pos - Number(numero)
            leaderboard.splice(pos, 1)
            leaderboard.splice(pos - newPos, 0, nombre)
        }
        return leaderboard
    },
    //console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1']))

    recycleMe(recycle) {
        let res = [0, 0, 0]
        recycle.map(e => e > 0 ? res[0]++ : e < 0 ? res[1]++ : res[2]++)
        return res;
    },
    //console.log(recycleMe([5, -9, 0, 6, -84, -95, 15]))

    //Ejercicio Name: Sequence convergence (6 kyu)
    convergence(n) {
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
    },
    //console.log(convergence(500))

    //Ejercicio Name: Simple Pig Latin (6 kyu)
    pigIt(str) {
        return str
            .split(" ")
            .map(e => {
                if (/\w/.test(e)) {
                    let primeraLetra = e.slice(0, 1)
                    return e = e.slice(1, e.length) + primeraLetra + "ay"
                } else return e
            })
            .join(" ")
    },
    pigIt2(str) {
        return str
            .split(" ")
            .map(e => {
                if (/\w/.test(e)) {
                    let primeraLetra = e.charAt(0)
                    return e.slice(1) + primeraLetra + "ay"
                } else return e
            })
            .join(" ")
    },
    //console.log(pigIt2('Pig latin is cool !'))

    //Ejercicio Name: Invert values (8 kyu)
    invert(array) {
        return array.map(e => -e)
    },
    //console.log(invert([1, 2, 3, 4, 5]))

    //Ejercicio Name: Hungarian Vowel Harmony (easy) (7 kyu)
    dative(word) {
        let filtered = [...word].filter(e => /[eéiíöőüűaáoóuú]/.test(e))
        let res = /[eéiíöőüű]/.test(filtered[filtered.length - 1]) ? "nek" : "nak"
        return word + res
    },
    dative2(word) {
        return /[eéiíöőüű]/.test(word) ? word + "nek" : word + "nak"
    },
    //console.log(dative2("szék"))

    //Ejercicio Name: Interview Question (easy) (7 kyu)
    getStrings(city) {
        let citySplit = [...city.toLowerCase()].filter(e => /\S/.test(e)).reduce((acc, i) => {
            acc[i] ? acc[i] += "*" : acc[i] = "*"
            return acc
        }, {})
        let res = []
        for (let item in citySplit) {
            res.push(`${item}:${citySplit[item]}`)
        }
        return res.join(",")
    },
    //console.log(getStrings("Las Vegas"))

    //Ejercicio Name: Mirror, mirror, on the wall... (7 kyu)
    mirror(data) {
        let sort = data.sort((a, b) => a - b)
        return [...sort, ...sort.reverse().slice(1)]
    },
    //console.log(mirror([1])) //[1, 2, 3, 2, 1]

    //Ejercicio Name: Keep Hydrated! (8 kyu)
    litres(time) {
        return Math.floor(time * 0.5)
    },
    //console.log(litres(3))

    lifePathNumber(dateOfBirth) {
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
    },
    //console.log(lifePathNumber("1879-03-14"))

    //Ejercicio Name: L1: Set Alarm (8 kyu)
    setAlarm(employed, vacation) {
        return employed && !vacation
    },
    //console.log(setAlarm(true, false))

    //Ejercicio Name: Shortest Word ( 7kyu)
    findShort(s) {
        return s.split(" ").reduce((acc, ele) => {
            acc < ele.length ? acc : acc = ele.length
            return acc
        }, Infinity)
        //return Math.min(...s.split(" ").map(x=>x.length))
    },
    //console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

    unluckyDays(year) {
        let unlucky = 0;
        for (let i = 1; i <= 12; i++) {
            if (new Date(year, i, 13).getDay() === 5) unlucky++
        }
        return unlucky
    },
    //console.log(unluckyDays(2015))

    //Ejercicio Name: Sum of array singles (7 kyu)
    repeats(arr) {
        let reduced = arr.reduce((acc, num) => {
            acc[num] ? acc[num]++ : acc[num] = 1
            return acc
        }, {})
        let soloUno = Object.entries(reduced).filter(x => x[1] == 1).map(x => Number(x[0])).reduce((acc, num) => acc + num)
        return soloUno
    },
    repeats2(arr) {
        return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, ele) => acc + ele)
    },
    //console.log(repeats2([4, 5, 7, 5, 4, 8]))

    //Ejercicio Name: String Task (7 kyu)
    stringTask(s) {
        let res = [...s.toLowerCase()].filter(x => !/[aeiouy]/.test(x)).map(x => "." + x)
        console.log(res)
        return res.join("")
    },
    stringTask2(s) {
        return s.toLowerCase().replace(/[aeiouy]/g, "").replace(/./g, v => "." + v)
    },
    //console.log(stringTask("Codewars"))

    //Ejercicio Name: Evens and Odds (7 kyu)
    evensAndOdds(num) {
        return num.toString(num % 2 ? 2 : 16)
    },
    //console.log(evensAndOdds(1015415))

    //Ejercicio Name: Tidy Number (Special Numbers Series #9)(7 kyu)
    tidyNumber(n) {
        let s = n.toString()
        for (let i = 0; i <= s.length; i++) {
            if (s[i] > s[i + 1]) return false
        }
        return true
    },
    //console.log(tidyNumber(1))

    //Ejercicio Name: STRONGN Strong Number (Special Numbers Series #2)(7 kyu)
    strong(n) {
        const fact = x => x <= 1 ? 1 : x * fact(x - 1)
        let nArr = [...n.toString()]
        let a = nArr.reduce((acc, ele) => acc += fact(ele), 0)
        return a == n ? "STRONG!!!!" : "Not Strong !!"
    },
    //console.log(strong(145))

    //Ejercicio Name: Disarium Number (Special Numbers Series #3)(7 kyu)
    disariumNumber(n) {
        let arrN = [...n.toString()]
        return arrN.map((e, i, arr) => Math.pow(e, i + 1)).reduce((acc, ele) => acc + ele) == n ? "Disarium !!" : "Not !!"
    },
    //console.log(disariumNumber(89))

    //Ejercicio Name: Balanced Number (Special Numbers Series #1 ) (7 kyu)
    balancedNum(number) {
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
    },
    //console.log(balancedNum(7))

    //Ejercicio Name: Special Number (Special Numbers Series #5) (7 kyu)
    specialNumber(n) {
        return [...n.toString()].every(x => /[0-5]/.test(x)) == true ? "Special!!" : "NOT!!"
    },
    //console.log(specialNumber(5))

    //Ejercicio Name: Automorphic Number (Special Numbers Series #6)(7 kyu)
    automorphic(n) {
        console.log(n)
        let cuadrado = Math.pow(n, 2)
        return cuadrado.toString().includes(n) ? "Automorphic" : "Not!!"
    },
    automorphic2(n) {
        return (n * n).toString().endsWith(n) ? "Automorphic" : "Not!!"
    },
    //console.log(automorphic2(625))

    //Ejercicio Name: Sum two arraysSum two arrays(6 kyu)
    addArrays(array1, array2) {
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
    },

    //Ejercicio Name: How many consecutive numbers are needed? (7 kyu)
    consecutive(arr) {
        console.log(arr)
        if (arr.length <= 1) return 0
        let cont = 0;
        let numMax = Math.max(...arr)
        let numMin = Math.min(...arr)
        for (let i = numMin; i <= numMax; i++) {
            if (!arr.includes(i)) cont++
        }
        return cont
    },
    //console.log(consecutive([4, 8, 6]))

    //Ejercicio Name: Row Weights(7 kyu)
    rowWeights(array) {
        let res = [0, 0]
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 0) res[0] += array[i]
            else res[1] += array[i]
        }
        return res
    },
    //console.log(rowWeights([80, 150]))

    //Ejercicio Name: Nth power rules them all! (7 kyu)
    modifiedSum(a, n) {
        return a.map(x => x ** n).reduce((acc, ele) => acc + ele) - a.reduce((acc, ele) => acc + ele)
    },
    modifiedSum2(a, n) {
        return a.reduce((acc, ele) => acc + ele ** n - ele, 0)
    },
    //console.log(modifiedSum2([1, 2, 3], 3))

    //Ejercicio Name: Meeting (6 kyu)
    meeting(s) {
        return s.toUpperCase().split(';').map((str) => {
            return str.split(':').reverse();
        }).sort().map((arr) => {
            return "(" + arr.join(', ') + ")";
        }).join('');
    },
    //console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))

    //Ejercicio Name: Dominant array elements (7 kyu)
    dominantArray(arr) {
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
    },
    dominantArray2(arr) {
        return arr.filter((num, idx, arrey) => arrey.slice(idx + 1).every(n => n < num))
    },
    dominantArray3(arr) {
        return arr.filter((num, idx, array) => num > Math.max(...array.slice(idx + 1)))
    },
    //console.log(dominantArray3([16, 17, 14, 3, 14, 5, 2]));

    //Ejercicio Name Shared Bit Counter (7 kyu)
    sharedBits(a, b) {
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
    },
    //console.log(sharedBits(43, 77)) //44,77

    //Ejercicio Name: Quarter of the year (8 kyu)
    quarterOf(month) {
        switch (true) {
            case month <= 3: return 1
            case month <= 6: return 2
            case month <= 9: return 3
            case month <= 12: return 4
            default:
                break;
        }
    },
    //console.log(quarterOf(3))

    //Ejercicio Name: Unique string characters (7 kyu)
    uniqueString(a, b) {
        let res = ""
        for (let i = 0; i < a.length; i++) {
            if (!b.includes(a[i])) res += a[i]
        }
        for (let i = 0; i < b.length; i++) {
            if (!a.includes(b[i])) res += b[i]
        }
        return res
    },
    uniqueString2(a, b) {
        return [...a, ...b].filter(x => !a.includes(x) || !b.includes(x)).join("")
    },
    uniqueString3(a, b) {
        return [...a, ...b].reduce((acc, cur) => {
            return acc += a.includes(cur) && b.includes(cur) ? "" : cur
        }, "")
    },
    //console.log(uniqueString3("xyab", "xzca"))

    getVowels(str) {
        /*     return [...str].reduce((acc, ele) => {
                /[aeiou]/.test(ele) ? acc++ : ""
                return acc
            }, 0) */
        console.log(str.match(/[aeiou]/g))
        return (str.match(/[aeiou]/g) || []).length
    },
    //console.log(getVowels("abracadabra"))

    //Ejercicio Name:  Delete occurrences of an element if it occurs more than n times (6 kyu)
    deleteNth(arr, n) {
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
    },
    deleteNth2(arr, x) {
        var obj = {}
        return arr.filter(function (number) {
            obj[number] = obj[number] ? obj[number] + 1 : 1
            return obj[number] <= x
        })
    },
    //console.log(deleteNth([4, 35, 35, 47, 4, 35, 4, 15, 38, 47, 34, 4, 4, 15, 47, 38, 4, 49, 4, 4, 49, 15, 38, 15, 4, 4, 15, 15, 4, 4, 47, 47, 44, 4, 47, 47, 4, 4, 34], 1));

    //Ejercicio Name: Holiday III - Fire on the boat (7 kyu)
    fireFight(s) {
        //return s.replace(/[F-f]ire/g, v => v="~~")
        return s.replace(/[F-f]ire/g, "~~")
    },
    //console.log(fireFight("Boat Rudder Mast Boat Hull Water fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))

    //Ejercicio Name: Figure Out the Notes (7 kyu)
    whatNote(string, fret) {
        const letras = ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
        return letras[(letras.indexOf(string.toUpperCase()) + fret) % 12]
    },
    //console.log(whatNote("D", 5))

    //Ejercicio Name 99 Bottles of Beer (7 kyu) //No solucionada
    sing() {
        let lyrics = ""
        for (let i = 99; i >= 0; i--) {
            if (i == 1) lyrics += `1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. \n`
            else if (i == 2) lyrics += `2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall. \n`
            else if (i >= 3) lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall. \n`
            else lyrics += `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`
        }
        console.log(lyrics)
        return [lyrics]
    },

    //Ejercicio Name Simple Fun #136: Missing Values (7 kyu)
    missingValues(arr) {
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
    },
    missingValues2(arr) {
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
    },
    //console.log(missingValues2([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]))

    //Ejercicio Name: Move 10 ( 7 kyu )
    moveTen(s) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let move10 = 'klmnopqrstuvwxyzabcdefghij';
        return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
    },
    //console.log(moveTen("testcase"))

    //Ejercicio Name: Hells Kitchen ( 7 kyu )
    gordon(s) {
        let word = s.replace(/[a-z]/g, x => {
            if (x == "a") x = "@"
            if (/[eiou]/.test(x)) x = "*"
            return x.toUpperCase()
        }).split(" ").map(x => x + "!!!!").join(" ")
        return word
    },
    gordon2(s) {
        return s.toUpperCase()
            .replace(/[A-Z]+/g, x => x + '!!!!')
            .replace(/[AEIOU]/g, x => x == "A" ? "@" : "*")
    },
    //console.log(gordon2('What feck damn cake'))

    //Ejercicio Name: Pairs of Bears (6 kyu )
    bears(x, s) {
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
    },
    bears2(x, s) {
        var pairs = s.match(/(8B)|(B8)/g);
        return [pairs.join(""), pairs.length >= x];
    },
    //console.log(bears2(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'))

    //Ejercicio Name: Beginner - Reduce but Grow ( 8 kyu)
    grow(x) {
        return x.reduce((acc, ele) => acc * ele)
    },
    //console.log(grow([1, 2, 3]))

    //Ejercico name: Spoonerize Me (7 kyu)
    spoonerize(words) {
        let [palA, palB] = words.split(" ")
        let flag = palA[0]
        palA = palA.replace(palA[0], palB[0])
        palB = palB.replace(palB[0], flag)
        return palA + " " + palB
    },
    spoonerize2(words) {
        let [palA, palB] = words.split(" ")
        return [palB[0] + palA.slice(1), palA[0] + palB.slice(1)].join(" ")
    },
    //console.log(spoonerize2("nit picking"))

    //Ejercicio name: Noonerize Me (7 kyu)
    noonerize(numbers) {
        //if (numbers.some(x => typeof x !== "number")) return "Invalid Array"
        if (numbers.some(isNaN)) return "Invalid Array"
        console.log(numbers[1].toString().slice(0))
        let res = [numbers[1].toString()[0] + numbers[0].toString().slice(1), numbers[0].toString()[0] + numbers[1].toString().slice(1)]
        console.log(res)
        return Math.abs((parseInt(res[1]) - parseInt(res[0])))
    },
    noonerize2(numbers) {
        let [num1, num2] = numbers.map(String);
        [num1, num2] = [num2[0] + num1.slice(1), num1[0] + num2.slice(1)];
        return num1 && num2 ? Math.abs(num1 - num2) : 'invalid array';
    },
    //console.log(noonerize2([12, 34]))

    //Ejercicio Name: Double Trouble (7 kyu)
    trouble(x, t) {
        for (let i = 0; i < x.length; i++) {
            if (x[i] + x[i + 1] === t) {
                x.splice(i + 1, 1);
                i--;
            }
        }
        return x;
    },
    //console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7))

    //Ejercicio Name: Chuck Norris I - Push Ups (7 kyu)
    chuckPushUps(string) {
        const validador = str => {
            let res = str.replace(/[A-z|2-9]/g, "")
            return parseInt(res, 2) ? parseInt(res, 2) : res
        }
        if (typeof string !== "string" || string.length == 0) return "FAIL!!"
        if (!string.split(" ").some(x => /\d/.test(x))) return "CHUCK SMASH!!"
        let arrNum = string.split(" ").map(x => validador(x)).filter(Number)
        return Math.max(...arrNum)
    },
    //console.log(chuckPushUps("5gnEI2U2Ko2xaDS10103wGZwkqQ9QfdfHJlsOkRvYUuy2110GEBUyUPJDjgdFfGZ10000G1DyripG8cXOzcN6rFl100"))
    //console.log(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'))

    //Ejercicio Name: Chuck Norris II - One Punch (7 kyu)
    onePunch(items) {
        console.log(items)
        return typeof items === "string" && items ? items.split(" ").map(x => x.replace(/[ae]/g, "")).sort().join(" ") : "Broken!"
    },
    //console.log(onePunch("ztXiEIDFhXQgWejZwWHgzCpGVpfLQnFUoTxVGrOinwPYSLUqwFTndkaQzhsFGefHHSjIgzSbDBaNohUqTvPGOvZToXJrwxtwchaMjPpgiET"))

    //Ejercicio name: Chuck Norris III - Cage Match (7 kyu)
    headSmash(array) {
        if (array.length === 0) return "Gym is empty"
        if (typeof array !== 'object' || array === null) return "This isn't the gym!!"
        return array.map((x) => x.replace(/O/g, " "))
    },
    /*
    console.log(headSmash([
        '*****************************************',
        '***********   _O_   *   _O_   ***********',
        '**  _O_   *  /(.)J  *  /(.)J  *   _O_  **',
        '** /(.)J  *  _| |_  *  _( )_  *  /(.)J **',
        '** _( )_  *********************  _( )_ **',
        '******************* X ******************']))
    */

    //Ejercicio Name: Chuck Norris IV - Bearded Fist (7 kyu)
    fistBeard(arr) {
        return arr.reduce((acc, ele) => {
            ele.forEach(x => acc += String.fromCharCode(x))
            return acc
        }, "")
    },
    //console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]))//'Nunchuks'

    //Ejercicio name: Who likes it? ( 6 kyu)
    likes(names) {
        if (!names.length) return "no one likes this"
        if (names.length === 1) return `${names} likes this`
        if (names.length === 2) return `${names.join(" and ")} like this`
        if (names.length === 3) return `${names[0]}, ${names[1]} and ${names.slice(-1)} like this`
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    },
    likes2(names) {
        let templates = [
            'no one likes this',
            '{name} likes this',
            '{name} and {name} like this',
            '{name}, {name} and {name} like this',
            '{name}, {name} and {left} others like this'
        ];
        let idx = Math.min(names.length, 4);
        return templates[idx].replace(/{name}|{left}/g, x => x === "{name}" ? names.shift() : names.length)
    },
    //console.log(likes2(["Peter", "Adrian", "Alex", "Berto"]))

    //Ejercicio name: If you can read this... (6 kyu)
    to_nato(words) {
        let code = {
            A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo", F: "Foxtrot", G: "Golf", H: "Hotel", I: "India",
            J: "Juliett", K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar", P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra",
            T: "Tango", U: "Uniform", V: "Victor", W: "Whiskey", X: "Xray", Y: "Yankee", Z: "Zulu"
        }
        return [...words.replace(/\s/g, "")].map(x => x = code[x.toUpperCase()] || x).join(" ")
    },
    //console.log(to_nato("If, you can read?"))//India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

    //Ejercicio name: Printer Errors (7 kyu)
    printerError(s) {
        let val = 0;
        s.split("").forEach(element => !/[a-m]/g.test(element) ? val++ : "");
        return `${val}/${s.length}`
    },
    //console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

    //Ejercicio name: Sum of Cubes (7 kyu)
    sumCubes(n) {
        let res = 0
        for (let i = 1; i <= n; i++) {
            res += Math.pow(i, 3)
        }
        return res
    },
    //console.log(sumCubes(2))

    //Ejercicio Name: Reverse the bits in an integer (7 kyu)
    reverseBits(n) {
        return parseInt([...n.toString(2)].reverse().join(""), 2)
    },
    //console.log(reverseBits(417))

    //Ejercicio Name: Twice as old (8 kyu)
    twiceAsOld(dadYearsOld, sonYearsOld) {
        let res;
        for (let i = 0; i < 100; i++) {
            if (dadYearsOld - i == sonYearsOld * 2) res = i
            else if (dadYearsOld + i == sonYearsOld * 2) res = i
        }
        return res
    },
    //console.log(twiceAsOld(36, 7))

    //Ejercicio name: Holiday II - Plane Seating (7 kyu)
    planeSeat(a) {
        let num = []
        let letter = []
        let res = ""
        for (let i = 0; i < a.length; i++) {
            if (a[i] >= 0) num.push(a[i])
            else letter.push(a[i])
        }
        num = num.join("")
        if (num > 60 || /I|J/i.test(letter)) return "No seat!!"

        if (num <= 20) res += "Front-"
        else if (num < 40) res += "Middle-"
        else res += "Back-"

        if (/[A-C]/i.test(letter)) res += "Left"
        else if (/[D-F]/i.test(letter)) res += "Middle"
        else res += "Right"
        return res
    },
    planeSeat2(a) {
        let num = parseInt(a)
        let letter = a.slice(-1)
        if (num > 60 || /[IJ]/i.test(letter)) return "no Seat!!"
        return `${num <= 20 ? "Front-" : num < 40 ? "Middle-" : "Back-"}${letter <= "C" ? "Left" : letter <= "F" ? "Middle" : "Right"}`
    },
    //console.log(planeSeat2('60D')) //'Back-Middle
    //console.log(planeSeat2('17K')) //Front-Right

    //Ejercicio Name: Harvest Festival (7 kyu)
    plant(seed, water, fert, temp) {
        console.log(seed, water, fert, temp)
        let res = ""
        if (temp < 20 || temp > 30) {
            console.log("entre")
            return res += ("-".repeat(water) + "".repeat(fert)).repeat(water) + seed
        }
        console.log("sali")
        return res += ("-".repeat(water) + seed.repeat(fert)).repeat(water)
    },
    //console.log(plant("#", 10, 2, 15))

    //Ejercicio Name: Numbers to letters (7 kyu)
    switcher(x) {
        let letters = {
            a: 26, b: 25, c: 24, d: 23, e: 22, f: 21, g: 20, h: 19, i: 18,
            j: 17, k: 16, l: 15, m: 14, n: 13, o: 12, p: 11, q: 10, r: 9, s: 8, t: 7, u: 6, v: 5, w: 4, x: 3, y: 2, z: 1,
            "!": 27, "?": 28, " ": 29
        }
        return x.map(num => {
            for (let key in letters) {
                const value = letters[key]
                if (num == value) {
                    return num = key
                }
            }
        }).join("")
    },
    switcher2(x) {
        let alpha = " zyxwvutsrqponmlkjihgfedcba!? "
        return x.map(num => alpha[num]).join("")
    },
    //console.log(switcher2(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']))//'btswmdsbd kkw

    //Ejercicio Name: Which are in? (6 kyu)
    inArray(array1, array2) {
        let res = []
        array2.forEach(word => {
            array1.forEach(w => {
                word.includes(w) ? res.push(w) : ""
            })
        })
        res = [...new Set(res)]
        return res.sort()
    },
    inArray2(arr1, arr2) {
        return [...new Set(arr2.reduce((acc, ele) => {
            arr1.forEach(wd => {
                ele.includes(wd) ? acc.push(wd) : ""
            })
            return acc
        }, []))].sort()
    },
    inArray3(arr1, arr2) {
        return arr1.filter(whole => (arr2.join(" ").includes(whole))).sort()
    },
    //console.log(inArray3(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

    toTime(seconds) {
        let hora = Math.floor(seconds / 3600)
        let minutos = Math.floor((seconds % 3600) / 60);
        return `${hora} hour(s) and ${minutos} minute(s)`;
    },
    //console.log(toTime(3500))

    //Build tower (6 kyu)
    towerBuilder(nFloors) {
        if (!nFloors) return []
        let tree = [], cont = 1
        for (let i = 1; i <= nFloors; i++) {
            let str = "*".repeat(cont)
            cont += 2
            tree.push(str)
        }
        let largo = tree[tree.length - 1].length

        let treeFixed = tree.map(floorActual => {
            if (floorActual.length == largo) return floorActual
            let floorLength = largo - floorActual.length
            console.log(floorActual.length, floorLength)

            for (let i = 0; i < floorLength; i++) {
                if (i % 2 == 0) floorActual = ` ${floorActual}`
                else floorActual = `${floorActual} `
            }
            return floorActual
        })
        return treeFixed
    },
    towerBuilder2(nFloors) {
        let tower = [];
        for (let i = 1; i <= nFloors; i++) {
            const spaces = " ".repeat(nFloors - i)
            const x = "*".repeat((i * 2) - 1)
            tower.push(spaces + x + spaces);
        }
        return tower;
    },
    //console.log(towerBuilder2(3))

    //Ejercicio Name: Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe (7 kyu)
    countDevelopers(list) {
        return list.filter(({ continent, language }) => continent === "Europe" && language === "JavaScript").length
    },
    /*
    console.log(countDevelopers([
        { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
        { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
        { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
        { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ]))
    */

    //Ejercicio Name:Shopping Calculation (6 kyu)
    shoppingCalculation(input) {
        let fruits = input.reduce((acc, ele) => {
            if (ele.includes("is")) {
                let [fruta, , valor] = ele.split(" ")
                acc[fruta.toLowerCase()] = valor.replace(/\D/gi, "")
            }
            return acc
        }, {})

        let persons = input.reduce((acc, ele) => {
            if (ele.includes("has")) {
                let [nombre, , dinero] = ele.split(" ")
                if (!acc.hasOwnProperty(nombre)) acc[nombre] = {}
                acc[nombre] = { dinero: dinero.replace(/\D/gi, "") }
            }
            return acc
        }, {})


        let compras = {};
        input.forEach(ele => {
            if (ele.includes("buys")) {
                let [name, , qty, product] = ele.split(" ")
                if (!compras.hasOwnProperty(name)) compras[name] = []
                compras[name].push({ qty, product: product.replace(/\W/gi, "") })
            }
        })

        let parcial = []
        for (let nombre in compras) {
            let personBuy = []
            compras[nombre].forEach((x) => {
                let qty = x.qty
                let prod = x.product[x.product.length - 1] == "s" ? x.product.slice(0, -1) : x.product
                personBuy.includes(nombre) ? personBuy.push(prod + " " + qty) : personBuy.push(nombre, prod + " " + qty)
            })
            parcial.push(personBuy)
        }
        let res = []
        console.log(fruits)
        parcial.forEach(per => {
            let [nombre, ...produ] = per
            let totalDinero = persons[nombre].dinero
            let prods = []
            produ.forEach(sin => {
                let [fruit, qty] = sin.split(" ")
                let precioFruta = fruits[fruit]
                totalDinero -= precioFruta * qty
                prods.push(qty + " " + fruit)
            })
            res.push([nombre, "$" + totalDinero])

            let idxNombre = 0;
            res.forEach((x, idx) => {
                if (x.includes(nombre)) {
                    idxNombre = idx
                }
            })
            console.log(idxNombre)


        })
        console.log(res)
    },
    /*
    console.log(shoppingCalculation(["Apple is $5.", "Banana is $7.", "Orange is $2.", "Alice has $26.", "John has $41.",
    "Alice buys 2 apples.",
    "John buys 1 banana.",
    "Alice buys 5 oranges."
]))
    */

    //Ejercicio Name: Reverse or rotate? (6 kyu)
    revrot(str, sz) {
        const validate = (str) => {
            return str.split("").map(num => Math.pow(num, 3)).reduce((acc, ele) => acc + ele, 0) % 2 == 0
        }
        const rotar = str => str.slice(1) + str.slice(0, 1)


        if (!str || sz <= 0 || sz > str.length) return ""
        let res = ""
        for (let i = 0; i < str.length; i = i + sz) {
            let chunk = str.substr(i, sz)
            if (chunk.length < sz) continue
            if (validate(chunk)) {
                let reverse = chunk.split("").reverse().join("")
                res += reverse
            } else {
                res += rotar(chunk)
            }
        }
        return res
    },
    //console.log(revrot("123456987653", 6))//234561876549

    //Ejercicio Name: Last Survivor (7 kyu)
    lastSurvivor(letters, coords) {
        let str = letters.split("")
        coords.forEach(coord => {
            str.splice(coord, 1)
        })
        return str.join("")
    },
    //console.log(lastSurvivor("foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr", [8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1]))

    repetirTexto(texto, veces) {
        let resultadoArreglo = []
        for (let i = 0; i < veces; i++) {
            resultadoArreglo.push(texto + "")
            console.log(`Iteracion n°${i}, arreglo -> ${resultadoArreglo}`);
        }
        return resultadoArreglo.join()
    },
    //console.log(repetirTexto("Hola Mundo", 3))

    //Ejercicio Name: Phone Directory (5 kyu)
    phone(str, num) {
        let strSplit = str.split("\n").filter(x => x.includes(num))

        if (strSplit.length > 1) return `Error => Too many people: ${num}`
        if (!strSplit.length) return `Error => Not found: ${num}`
        let name = strSplit[0].match(/<.+>/)[0].slice(1, -1)
        let address = strSplit[0].replace(/<.+>|\+\d\d?-(\d{3}-){2}\d{4}|[;$*/?,:!]/g, "").replace(/_| +/g, " ")
        return `Phone => ${num}, Name => ${name}, Address => ${address.trim()}`
    },
    /*
    const dr = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010\n"
    + "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
    + "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
    + "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
    + "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222\n"
    + "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
    + "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
    + "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
    + "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
    + "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
    + "<P Salinge> Main Street, +1-098-512-2222, Denve\n"
    */
    maxSumArr(arr) {
        let sumaMax = []
        for (let i = 0; i < arr.length; i++) {
            const numIterado = arr[i]
            const numeroIteradoSgte = arr[i + 1] || 0
            console.log(numIterado, numeroIteradoSgte);
            if (numeroIteradoSgte && numIterado + numeroIteradoSgte > sumaMax) sumaMax = [numIterado + numeroIteradoSgte, [numIterado, numeroIteradoSgte]]
        }
        return sumaMax
    },
    //console.log(maxSumArr([-2, 2, 5, -11, 6]));

    iqTest(numbers) {
        const nums = numbers.split(" ")
        const [par, impar] = nums.reduce((arr, ele) => {
            ele % 2 == 0 ? arr[0].push(ele) : arr[1].push(ele)
            return arr
        }, [[], []])
        return par.length > 1 ? nums.indexOf(impar[0]) + 1 : nums.indexOf(par[0]) + 1
    },
    //console.log(iqTest("2 4 7 8 10"))

    //Simple Fun #305: Typist (6 kyu)
    typist(s) {
        const isUpperCase = s => s == s.toUpperCase()
        return [...s].reduce((acc, ele, idx, self) => {
            if (idx === 0 && ele === ele.toUpperCase()) return acc
            else if (idx === 0) return acc = 1

            if (isUpperCase(self[idx - 1]) && ele == ele.toLowerCase()) acc += 2
            else if (isUpperCase(self[idx - 1]) && ele == ele.toUpperCase()) acc += 1
            else if (!isUpperCase(self[idx - 1]) && ele == ele.toLowerCase()) acc += 1
            else if (!isUpperCase(self[idx - 1]) && ele == ele.toUpperCase()) acc += 2
            return acc
        }, 2)
    },
    typist2(s) {
        const isUpperCase = s => s == s.toUpperCase()
        let mayusActive = false
        return [...s].reduce((acc, ele, idx, self) => {
            acc++
            if (isUpperCase(ele)) {
                if (!mayusActive) { mayusActive = !mayusActive; acc++; }
            } else {
                if (mayusActive) { mayusActive = !mayusActive; acc++; }
            }
            return acc
        }, 0)
    },
    //console.log(typist2("BeiJingDaXueDongMen"), 31)

    //Remove duplicate words (7 kyu)
    removeDuplicateWords(s) {
        return [...new Set(s.split(" "))].join(" ")
    },
    //console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));

    //Format a string of names like 'Bart, Lisa & Maggie (6 kyu)
    list(arr) {
        if (!arr.length) return ''
        const validaName = names => {
            if (names.length == 1) return names[0]
            if (names.length == 2) return `${names[0]} & ${names[1]}`
            const firstNames = names.slice(0, names.length - 2).join(", ")//names.join(", ")
            return `${firstNames}, ${names[names.length - 2]} & ${names[names.length - 1]}`
        }
        const names = arr.map((x) => x.name)
        return validaName(names)
    },
    list2(names) {
        return names.reduce((prev, current, index, array) => {
            if (index === 0) {
                return current.name;
            }
            else if (index === array.length - 1) {
                return prev + ' & ' + current.name;
            }
            else {
                return prev + ', ' + current.name;
            }
        }, '');
    },
    //console.log(list([{ name: 'Bart' }, { name: 'Homer' }, { name: 'Lisa' }, { name: 'Maggie' }]));

    //Duplicate Encoder (6 kyu)
    duplicateEncode(word) {
        const arrWords = [...word].map(x => x.toLowerCase())
        const countWords = arrWords.reduce((acc, ele) => {
            if (!acc.hasOwnProperty(ele)) acc[ele] = 0
            acc[ele] += 1
            return acc
        }, {})
        let str = ''
        arrWords.forEach(letter => countWords[letter] > 1 ? str += ')' : str += '(')
        return str
    },
    duplicateEncode2(word) {
        const arrWords = [...word]
        let str = ''
        if (/[A-Z]/.test(arrWords[0])) return 'Ignorada'
        for (const letter of word) {
            const regex = new RegExp(+'"' + letter + '"', "g");
            const repetidos = word.match(regex).length
            repetidos > 1 ? str += ')' : str += '('
        }
        return str
    },
    //console.log(duplicateEncode("Success"));//")())())","should ignore case"

    //Easy Balance Checking (6 kyu)
    balance(book) {
        const round = x => Number(x).toFixed(2);
        book = book.split("\n").filter(Boolean).map(x => x.replace(/[^a-z0-9.]/gi, " ").split(" ").filter(Boolean));
        let balance = book[0];
        let totalExpence = 0;
        let result = ["Original Balance: " + round(balance)];
        book.forEach((x, i) => {
            if (i > 0) {
                totalExpence += Number(book[i][2]);
                balance -= Number(book[i][2])
                result.push(book[i][0] + " " + book[i][1] + " " + round(book[i][2]) + " Balance " + round(balance));
            }
        });
        result.push("Total expense  " + round(totalExpence));
        result.push("Average expense  " + round(totalExpence / (book.length - 1)));
        return result.join("\r\n");
    },
    /*
    console.log(balance(`1000.00!=
    125 Market !=:125.45
    126 Hardware =34.95
    127 Video! 7.45
    128 Book :14.32
    129 Gasoline ::16.10
    `))
    */

    //Shopping Calculation (6 kyu)
    shoppingCalculation(input) {
        const object = input.reduce((acc, ele) => {
            if (ele.split(" ").includes('has')) {
                const [name, money] = ele.split(' has').map(x => x.trim().replace('.', ''))
                acc[name] = {
                    money: +money.replace("$", ''),
                    product: []
                }
            }
            return acc
        }, {})

        const prices = input.reduce((acc, ele) => {
            if (ele.split(" ").includes('is')) {
                const [fruit, price] = ele.split('is').map(x => x.trim().replace('.', ''))
                acc[fruit.toLowerCase()] = price.replace('$', '')
            }
            return acc
        }, {})

        input.forEach(inp => {
            if (inp.includes('buys')) {
                const name = inp.split(" ")[0]
                const product = inp.split(" ").pop().replace('.', '')
                const arr = inp.split(" ")
                const qty = arr[arr.length - 2]

                object[name].product.push({ qty, product })
            }
        })

        const result = []
        for (const name in object) {
            let money = object[name].money
            const products = object[name].product
            let items = ''

            products.forEach(prod => {
                const { qty, product } = prod
                const priceProd = prices[product.endsWith('s') ? product.slice(0, -1) : product]
                money = money - (priceProd * qty)
                items += `${qty} ${product}, `
            })


            result.push(
                [name, '$' + money, items.trim().substring(0, items.length - 2)]
            )
        }

        console.log(result);
        return result
    },
    shoppingCalculation2(input) {
        const prices = {}
        const people = {}
        const buys = []

        function cleanPrice(price) {
            return +price.substring(1, price.length - 1)
        }

        function cleanPrice(price) {
            return +price.substring(1, price.length - 1)
        }

        for (let command of input) {
            let [name, operator, price] = command.split(" ")
            if (operator === 'is') {
                prices[name.toLowerCase()] = cleanPrice(price)
            }
            else if (operator === 'has') {
                people[name] = { money: cleanPrice(price), products: [] }
            }
            else {
                buys.push(command)
            }
        }

        for (let command of buys) {
            let [name, operator, amount, product] = command.split(" ")
            const clean_product = cleanProduct(product)
            const cost = prices[clean_product] * amount
            people[name].money -= cost
            const product_str = amount > 1 ? `${amount} ${clean_product}s` : `${amount} ${clean_product}`
            people[name].products = [...people[name].products, product_str]
        }

        const result = []

        for (let name in people) {
            result.push(
                [name, `$${people[name].money}`, people[name].products.join(", ")]
            )
        }


        return result
    },

    //Stop gninnipS My sdroW! (6 Kyu)
    spinWords(string) {
        //TODO Have fun :)
        return string.split(" ").map(word => {
            if (word.length >= 5) {
                return word = word.split("").reverse().join("")
            }
            return word
        }).join(" ")
    },
    //console.log(spinWords("Hey fellow warriors"))

    //Get Planet Name By ID (8 kyu)
    getPlanetName(id) {
        let name;
        switch (id) {
            case 1:
                name = 'Mercury'
                break;
            case 2:
                name = 'Venus'
                break
            case 3:
                name = 'Earth'
                break
            case 4:
                name = 'Mars'
                break
            case 5:
                name = 'Jupiter'
                break
            case 6:
                name = 'Saturn'
                break
            case 7:
                name = 'Uranus'
                break
            case 8:
                name = 'Neptune'
                break
        }
        return name;
    },
    //console.log(getPlanetName(5));

    //Multiples of 3 or 5(6 kyu)
    multiples3Or5(number) {
        console.log("Number", number);
        let sum = 0
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) sum += i
        }
        return sum
    },
    //console.log(multiples3Or5(10))

    //Help Suzuki count his vegetables....(7 kyu)
    countVegetables(string) {
        const arrVegs = string
            .match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g)
            .reduce((acc, vegetable) => {
                if (!acc[vegetable]) acc[vegetable] = 0
                acc[vegetable]++
                return acc
            }, {})

        const result = []
        for (const prop in arrVegs) {
            const count = arrVegs[prop]
            result.push([count, prop])
        }

        return result.sort((a, b) => {
            const [countA, nameA] = a
            const [countB, nameB] = b

            //if (countA === countB) return nameB.localeCompare(nameA)
            //else return countB - countA
            return countB - countA || nameB.localeCompare(nameA)
        })
    },
    //console.log(countVegetables(`mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`))

    //Predict your age!(7 kyu)
    predictAge(...ages) {
        //return Math.floor(Math.sqrt(ages.reduce((acc, sum) => acc + (sum * sum), 0)) / 2)
        return Math.floor(Math.hypot(...ages) / 2)
    },
    //console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))//86

    //Playing with passphrases(6 Kyu)
    playPass(s, n) {
        const transformCode = (char, n) => {
            if (Number(char) && typeof parseInt(char) == 'number') return String(9 - Number(char))
            else if (/[a-zA-Z]/i.test(char)) return String.fromCharCode(char.charCodeAt(0) + n);
            return char
        }
        const upAndDown = str => {
            let res = ''
            for (let i = 0; i < str.length; i++) {
                const letter = str[i];
                res = i % 2 == 0 ? letter.toUpperCase() + res : letter.toLowerCase() + res
            }
            return res
        }

        let res = ''
        for (const char of s) {
            res += transformCode(char, n)
        }

        return upAndDown(res)
    },
    //console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))//"4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"

    //Convert string to camel case (6 Kyu)
    toCamelCase(str) {
        let finalStr = ''
        for (let i = 0; i <= str.length; i++) {
            const char = str[i] || ''
            if (/-|_/.test(char)) {
                const newChar = str[i + 1]
                finalStr += newChar.toUpperCase()
                i++
            } else {
                finalStr += char
            }
        }
        return finalStr
    },
    //console.log(toCamelCase("The-Stealth-Warrior"))// 'TheStealthWarrior'

    //Write Number in Expanded Form (6 Kyu)
    expandedForm(num) {
        const give0 = num => '0'.repeat(num.toString().length - 1)

        const result = []
        const numToStr = num.toString()
        for (const idx in numToStr) {
            const numS = numToStr[idx]
            if (numS === '0') continue;
            else {
                const corte = numToStr.slice(idx)
                result.push(`${numS}${give0(corte)}`)
            }
        }
        return result.join(' + ')
    },
    //console.log((expandedForm(70304)))// '70000 + 300 + 4'

    //Adding Big Numbers (4 kyu)
    add(a, b) {
        let arrA = [...a], arrB = [...b]
        const arrayDesigual = arrA.length > arrB.length ? arrB : arrA
        while (arrA.length != arrB.length) arrayDesigual.unshift('0')

        let carry = 0;
        let result = [];
        for (let i = arrA.length - 1; i >= 0; i--) {
            let sumOfDigits = parseInt(arrA[i]) + parseInt(arrB[i]) + carry;
            carry = sumOfDigits >= 10 ? 1 : 0;
            sumOfDigits = String(sumOfDigits);

            result.unshift(sumOfDigits[sumOfDigits.length - 1]);
        }

        if (carry == 1) result.unshift(carry);

        return result.join("");
    },
    //console.log(add("1372", "69")) // "1441

    score2(dice) {
        const util = (obj, i) => {
            let numeroDeReps = obj.get(i)
            if (!numeroDeReps) return 0

            let total = 0
            if (i === 1 && numeroDeReps > 2) total += 1000, numeroDeReps -= 3
            if (i === 1) total += (100 * numeroDeReps)
            if (i === 6 && numeroDeReps > 2) total += 600
            if (i === 5 && numeroDeReps > 2) total += 500, numeroDeReps -= 3
            if (i === 5) total += (50 * numeroDeReps)
            if (i === 4 && numeroDeReps > 2) total += 400
            if (i === 3 && numeroDeReps > 2) total += 300
            if (i === 2 && numeroDeReps > 2) total += 200
            return total
        }
        let result = 0;
        const obj = dice
            .reduce((acc, num) => {
                let data = acc.get(num) + 1 || 1
                acc.set(num, data)
                return acc
            }, new Map())

        Array.from({ length: 6 }, (_, i) => {
            result += util(obj, i + 1)
        })
        return result
    },
    //console.log(score2([2, 4, 4, 5, 4])) //  450:  400 (for three 4s) + 50 (for the 5)

    //Decipher this! (6 Kyu)
    decipherThis(str) {
        return str
            .split(" ")
            .reduce((phrase, word) => {
                return phrase += " " + word
                    .replace(/\d+/g, w => String.fromCharCode(w))
                    .replace(/(.)(.)(.*)(.)/, '$1$4$3$2')
            }, '')
            .trim()
    },
    //console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));

    //International Morse Code Encryption (7 Kyu)
    encryption(message) {
        const CHAR_TO_MORSE = {} //this exist on the kata
        return [...message].reduce((phrase, word) => phrase += `${CHAR_TO_MORSE[word] || ' '} `, '').trim()
    },
    //console.log(encryption('HELLO WORLD'));//".... . .-.. .-.. ---   .-- --- .-. .-.. -.."

    //So Many Permutations! (4 Kyu)
    permutations(string) {
        let opciones = [];

        if (string.length === 1) return [string]

        for (let i = 0; i < string.length; i++) {

            let char = string[i];
            let resto = string.slice(0, i) + string.slice(i + 1);


            for (const opcionesRestantes of permutations(resto)) {
                opciones.push(char + opcionesRestantes);
            }
        }

        return opciones;
    },
    //console.log(permutations('abc'))

    //Common array elements (6 Kyu)
    common(a1, a2, a3) {
        const countReps = arr => arr.reduce((acc, ele) => {
            acc.set(ele, (acc.get(ele) || 0) + 1);
            return acc
        }, new Map())
        let result = 0;

        const a2Map = countReps(a2)
        const a3Map = countReps(a3)

        for (const num of a1) {
            if (a2Map.has(num) && a3Map.has(num)) {
                result += num
                a2Map.set(num, a2Map.get(num) - 1)
                a3Map.set(num, a3Map.get(num) - 1)
            }
        }

        return result
    },
    common2(a1, a2, a3) {
        return a1.reduce((acc, ele) => {
            if (a2.includes(ele) && a3.includes(ele)) {
                acc += ele
                a2.splice(a2.indexOf(ele), 1)
                a3.splice(a3.indexOf(ele), 1)
            }
            return acc
        }, 0)
    },
    //console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))

    //Explode (7 Kyu)
    explode(x) {
        const [a, b] = x

        if (typeof a === 'number' && typeof b === 'number') {
            return Array.from({ length: a + b }).fill(x)
        } else if (typeof a === 'number') {
            return Array.from({ length: a }).fill(x)
        } else if (typeof b === 'number') {
            return Array.from({ length: b }).fill(x)
        }
        return "Void!"
    },
    //console.log(explode(["a", 0]))

    solver(arr) {
        const result = []
        arr.forEach((num, idx) => idx === arr.lastIndexOf(num) && result.push(num))
        return result
    },

    slicesToName(n) {
        if (typeof n !== 'number' || n <= 1) return null
        const resto = Math.floor(n / 2)
        const sandwich = resto * 2
        const bread = n - sandwich
        return sandwich + bread
    },

    nameToSlices(name) {
        let res = 0
        name.split(" ").forEach((x, idx) => {
            if (idx === 0 && x !== 'bread') return null
            x === 'bread' ? res++ : res += 2
        })
        return res
    },
    //console.log(slicesToName(11))

    // Quicksum (7 Kyu)
    quicksum(packet) {
        const alf = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if (/[^A-Z ]/g.test(packet)) return 0

        return packet.split("").reduce((acc, ele, idx) => {
            return ele === ' ' ? acc : acc + ((idx + 1) * alf.indexOf(ele))
        }, 0)
    },
    //console.log(quicksum("MID CENTRAL"))// 650

    // Building Strings From a Hash (7 kyu)
    stringsFromaHash(pairs) {
        return Object.keys(pairs)
            .map(key => `${key} = ${pairs[key]}`)
            .join(",")
    },
    //console.log(stringsFromaHash({ a: 1, b: '2' }))// should return "a = 1,b = 2"

    // Calculate mean and concatenate string (7 Kyu)
    mean(lst) {
        return lst.reduce((acc, ele, idx) => {
            if (/[0-9]/.test(ele)) acc[0] += Number(ele)
            else acc[1] += ele
            if (idx === lst.length - 1) acc[0] = acc[0] / 10
            return acc
        }, [0, ""])
    },
    //console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]))// [3.6, "udiwstagwo"]

}// E N D


