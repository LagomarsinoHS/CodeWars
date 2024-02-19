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
    }
}


console.log(exercises.isPowerOfTwo(1))
console.log(exercises.isPowerOfTwo(16))
console.log(exercises.isPowerOfTwo(3))