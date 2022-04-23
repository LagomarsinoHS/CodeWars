/*
👉 : moves the memory pointer to the next cell
👈 : moves the memory pointer to the previous cell
👆 : increment the memory cell at the current position
👇 : decreases the memory cell at the current position.
🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛
🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜
👊 : Display the current character represented by the ASCII code defined by the current position.
https://github.com/jesus-seijas-sp/hand-challenge
https://www.youtube.com/watch?v=uZ8SMkRf3s4&t=616s 
*/

const MAX_CELL = 255;
const MIN_CELL = 0;

const verifyData = value => {
    if (value > MAX_CELL) return MIN_CELL
    if (value < MIN_CELL) return MAX_CELL
    return value
}

const handChallenge = string => {
    const memory = [0]
    let pointer = 0
    let index = 0
    let output = ''
    const arrString = Array.from(string)
    let cont = 1;

    const actions = {
        '👉': () => {
            pointer++
            memory[pointer] ??= 0
        },
        '👈': () => pointer--,
        '👆': () => memory[pointer] = verifyData(memory[pointer] + 1),
        '👇': () => memory[pointer] = verifyData(memory[pointer] - 1),
        '🤜': () => {
            if (memory[pointer] === 0) {
                index = arrString.indexOf('🤛', index)
            }
        },
        '🤛': () => {
            if (memory[pointer] !== 0) {
                index = arrString.lastIndexOf('🤜', index)
            }
        },
        '👊': () => {
            output += String.fromCharCode(memory[pointer])
        }
    }



    console.log("---- Inicio ----");

    while (index < arrString.length) {
        const hand = arrString[index]
        actions[hand]()

        console.log({ hand, index, pointer, memory, output });
        console.log(">>>>>>", cont, "<<<<<<");
        index += 1
        cont++
    }
    return output
}

handChallenge('👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊') //-> Hello