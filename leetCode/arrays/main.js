const exercises = {
    twoSum(nums, target) {
        const hash = new Map()

        for (let i = 0; i <= nums.length - 1; i++) {
            const element = nums[i]
            const complement = target - element

            const hashNum = hash.get(complement)
            if (hashNum !== undefined) {
                return [hashNum, i]
            }

            hash.set(element, i)
        }
    }

}


console.log(exercises.twoSum([2, 7, 11, 15], 9))