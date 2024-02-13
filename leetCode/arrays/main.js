const getTicks = n => console.log("Ticks ->", n)
const createArray = n => Array.from({ length: n }, (_) => Math.floor(Math.random() * 100) + 1)

const exercises = {
    twoSum(nums, target) {
        //https://leetcode.com/problems/two-sum/description/
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
        //https://leetcode.com/problems/remove-element/description/
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
        //https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
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
        //https://leetcode.com/problems/search-insert-position/description/
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
        //https://leetcode.com/problems/palindromic-substrings/description/
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
        //https://leetcode.com/problems/plus-one/description/
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
        //https://leetcode.com/problems/majority-element/description
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
    },
    firstPalindrome(words) {
        //https://leetcode.com/problems/find-first-palindromic-string-in-the-array
        function checkPalindrome(word) {
            let left = 0;
            let right = word.length - 1

            while (left < right) {
                if (word[left] !== word[right]) return false

                left++
                right--
            }
            return true
        }
        for (const word of words) {
            if (checkPalindrome(word)) return word
        }
        return ''
    },
    getConcatenation(nums) {
        //https://leetcode.com/problems/concatenation-of-array
        const ans = [];

        /*   for (let index = 0; index < 2; index++) {
              nums.forEach(num => {
                  ans.push(num)
              });              
          } */

        for (let i = 0; i < nums.length; i++) {
            //ans[i] = nums[i]
            //ans[i + nums.length] = nums[i] 
            ans[i] = ans[i + nums.length] = nums[i];
        }
        return ans
    },
    buildArray(nums) {
        //https://leetcode.com/problems/build-array-from-permutation/description/
        /*  const ans = []
         for (let i = 0; i < nums.length; i++) {
             const numsElement = nums[i]
             ans[i] = nums[numsElement]
         }
         return ans */

        const ans = []
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            ans[left] = nums[nums[left]]
            ans[right] = nums[nums[right]]

            left++
            right--
        }
        return ans
    },
    countPairs(nums, target) {
        //https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target
        let count = 0;
        let ticks = 0
        /*  
         for (let i = 0; i < nums.length; i++) {
 
             for (let j = i + 1; j < nums.length; j++) {
                 ticks++
                 if (i < j && (nums[i] + nums[j] < target)) count++
             }
         }
         console.log("ticks", ticks)
         return count */

        let left = 0;
        let right = nums.length - 1
        nums.sort((a, b) => a - b) // Ordeno el array para poder hacer que funcione la matemática

        while (left < right) {
            ticks++
            if (nums[left] + nums[right] < target) {
                //Si este if se cumple, significa que todos los numeros que estén dentro de el rango, seran menor a target, por ende lo sumo a count
                count += right - left // Este orden right siempre será el mayor ya que parte con el largo del array
                left++
            } else {
                right--
            }
        }

        console.log("Ticks ->", ticks)
        return count
    },
    countNegatives(grid) {
        //https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
        let ticks = 0;
        let count = 0
        for (const arr of grid) {
            count += arr.filter(x => {
                ticks++
                return x > 0
            }).length
        }
        getTicks(ticks)
        return count
    },
    targetIndices(nums, target) {
        let ticks = 0;
        let ans = [];
        nums.sort((a, b) => a - b);

        let keep = true;
        for (let i = 0; i < nums.length; i++) {
            ticks++
            if (nums[i] === target) {
                ans.push(i);
                keep = false;
                continue;
            }

            if (!keep) break;
        }
        getTicks(ticks);
        return ans;
    },
}
console.log(exercises.targetIndices([1, 2, 5, 2, 3], 2))







