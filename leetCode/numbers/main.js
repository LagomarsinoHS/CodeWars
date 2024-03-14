const exercises = {
    isPowerOfTwo(n) {
        if (n < 0) return undefined
        for (let i = 0; i <= n; i++) {
            const value = Math.pow(2, i)
            if (n === value) {
                return true
            }
            if (value > n) {
                return false
            }
        }
    },
    letterCombinations(digits) {
        //https://leetcode.com/problems/letter-combinations-of-a-phone-number/
        let numMap = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z']
        }
        if (digits.length === 0) return []
        if (digits.length === 1) return numMap[digits]

        // Array para almacenar las combinaciones
        let combinaciones = [''];

        // Iteramos sobre cada dígito del número
        for (let digito of digits) {
            // Obtenemos las letras asociadas al dígito actual
            const letras = numMap[digito];

            // Array temporal para almacenar las nuevas combinaciones
            let nuevasCombinaciones = [];

            // Iteramos sobre cada letra y cada combinación existente
            for (let letra of letras) {
                for (let combinacion of combinaciones) {
                    // Concatenamos la letra actual a cada combinación existente
                    let value = combinacion + letra;
                    nuevasCombinaciones.push(value);
                }
            }

            // Actualizamos las combinaciones con las nuevas combinaciones generadas
            combinaciones = nuevasCombinaciones;
        }

        return combinaciones;

    },
    
}


console.log(exercises.numSubarraysWithSum([1, 0, 1, 0, 1]))
