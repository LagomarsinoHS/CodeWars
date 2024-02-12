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
    },
    removeElement(nums, val) {
        //return nums.filter(num => num !== val).length
        let i = 0;
        while (i < nums.length) {
            if (nums[i] === val) {
                nums.splice(i, 1)
            } else i++
        }
        return nums.length;
    },
    removeDuplicates(nums) {
        let idx = 1
        while (idx < nums.length) {
            if (nums[idx] === nums[idx - 1]) {
                nums.splice(idx, 1)
            } else {
                idx++
            }
        }
        return nums.length
    },
    searchInsert(nums, target) {
        const idxOf = nums.indexOf(target)
        if (idxOf === -1) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[nums.length - 1] < target) return nums.length;
                if (nums[i] < target) continue;
                else return i
            };
        }
        else return idxOf
    },
    searchInsertBinary(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) return mid
            else if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    },
    countSubstrings(str) {
        function isPalindrome(subStr) {
            let left = 0
            let right = subStr.length - 1;

            while (left <= right) {
                if (subStr[left] !== subStr[right]) {
                    return false
                }
                left++
                right--
            }
            return true
        }

        let count = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = str.length - 1; j >= i; j--) {


                const word = str.slice(i, j + 1)
                if (isPalindrome(word)) {
                    count++
                }
            }

        }
        return count;
    },
    plusOne(digits) {
        let tmp = ''
        for (let i = 0; i < digits.length; i++) {
            tmp += `${digits[i]}`
        }
        const tmpToNumPlusOne = BigInt(tmp) + 1n

        const result = []
        const strNumber = String(tmpToNumPlusOne)
        for (let i = 0; i < strNumber.length; i++) {
            result.push(parseInt(strNumber[i]))
        }

        return result
    },
    plusOne2(digits) {
        //[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
        const joinArr = digits.join("");
        const arrPlus1 = BigInt(joinArr) + 1n;
        return arrPlus1.toString().split("")
    },
    majorityElement(nums) {
        const countHash = new Map();
        const threshold = nums.length / 2;

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {

            countHash.set(nums[left], (countHash.get(nums[left]) || 0) + 1);
            if (countHash.get(nums[left]) > threshold) return nums[left];

            countHash.set(nums[right], (countHash.get(nums[right]) || 0) + 1);
            if (countHash.get(nums[right]) > threshold) return nums[right];

            left++;
            right--;
        }
    }


}

console.log(exercises.majorityElement([2, 2, 1, 1, 1, 2, 2]))
