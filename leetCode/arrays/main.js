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
    rearrangeArray(nums) {
        //https://leetcode.com/problems/rearrange-array-elements-by-sign/
        const positive = [];
        const negative = [];

        for (i = 0; i < nums.length; i++) {
            if (nums[i] > 0) positive.push(nums[i])
            else negative.push(nums[i])
        }


        let j = 0
        for (let i = 0; i < nums.length; i += 2) {
            nums[i] = positive[j]
            nums[i + 1] = negative[j]
            j++
        }
        return nums;
    },
    rearrangeArray2(nums) {
        //https://leetcode.com/problems/rearrange-array-elements-by-sign/

        const ans = [];

        let posIdx = 0;
        let negIdx = 1;

        for (const element of nums) {
            if (element > 0) {
                ans[posIdx] = element
                posIdx += 2;
            } else {
                ans[negIdx] = element
                negIdx += 2;
            }
        }
        return ans
    },
    findLeastNumOfUniqueInts(arr, k) {
        // Create a map to store the frequency of each number
        const frequencyMap = new Map();

        // Populate the frequency map
        arr.forEach(num => {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        });

        // Convert map entries to an array of [number, frequency] pairs and sort ASC by frequency
        const sortedFreqArray = Array.from(frequencyMap.entries()).sort((a, b) => a[1] - b[1]);


        // Initialize unique count
        let uniqueCount = sortedFreqArray.length;

        // Iterate through the sorted frequency array
        for (const [, frequency] of sortedFreqArray) {
            if (k >= frequency) {
                // If k is greater than or equal to the frequency of the current number,
                // decrement k by the frequency and decrement the unique count
                k -= frequency;
                uniqueCount--;
            } else {
                // If k is less than the frequency of the current number, break the loop
                break;
            }
        }

        return uniqueCount;
    },
    numIdenticalPairs(nums) {
        //https://leetcode.com/problems/number-of-good-pairs/

        let ans = 0;
        for (let i = 0; i <= nums.length; i++) {
            const numI = nums[i]
            for (let j = i + 1; j <= nums.length; j++) {
                const numJ = nums[j]

                if (numI === numJ && i < j) ans++
            }
        }
        return ans
    },
    finalValueAfterOperations(operations) {
        //https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
        let ans = 0;
        let left = 0
        let right = operations.length - 1

        const processOpe = ope => {
            if (ope == '--X' || ope == 'X--') ans--
            if (ope == '++X' || ope == 'X++') ans++

        }
        while (left < right) {
            let lOpe = operations[left];
            let rOpe = operations[right]
            processOpe(lOpe)
            processOpe(rOpe)

            left++
            right--
        }
        if (left === right) {
            processOpe(operations[left]);
        }
        return ans

    },
    shuffle(nums, n) {
        //https://leetcode.com/problems/shuffle-the-array/
        let shuffledArray = [];

        for (let i = 0; i < n; i++) {
            shuffledArray.push(nums[i], nums[i + n]);
        }

        return shuffledArray;
    },
    finalPrices(prices) {
        //https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
        /*        let ans = []
               for (let i = 0; i < prices.length; i++) {
                   let newValue = prices[i]
                   for (let j = i + 1; j < prices.length; j++) {
       
                       if (prices[j] <= prices[i]) {
                           newValue = newValue - prices[j]
                           break;
                       }
                   }
                   ans.push(newValue)
               }
               return ans */
        const stackOfIndexes = [];
        const ans = new Array(prices.length);
        for (let i = 0; i < prices.length; i++) {

            while (stackOfIndexes.length > 0 && prices[stackOfIndexes[stackOfIndexes.length - 1]] >= prices[i]) {
                const idx = stackOfIndexes.pop()
                ans[idx] = prices[idx] - prices[i]
            }
            stackOfIndexes.push(i)
        }

        for (let i = 0; i < stackOfIndexes.length; i++) {
            const idx = stackOfIndexes[i]
            ans[idx] = prices[idx]
        }

        return ans
    },
    runningSum(nums) {
        //https://leetcode.com/problems/running-sum-of-1d-array/
        let ans = []
        let total = 0
        for (const idx in nums) {
            total += nums[idx]
            ans.push(total)
        }
        return ans
    },
    average(salaries) {
        //https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

        let min = Infinity
        let max = -Infinity
        let sum = 0
        for (const salary of salaries) {
            sum += salary;
            min = Math.min(min, salary);
            max = Math.max(max, salary);
        }
        sum -= min + max;

        return sum / (salaries.length - 2)
    },
    findWordsContaining(words, x) {
        //https://leetcode.com/problems/find-words-containing-character/
        let ans = []

        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(x)) {
                ans.push(i)
            }
        }
        return ans
    },
    maximumWealth(accounts) {
        //https://leetcode.com/problems/richest-customer-wealth/

        //BruteForce
        /*        let sum = 0
               for (let i = 0; i < accounts.length; i++) {
       
                   const sumIterateed = accounts[i].reduce((acc, ele) => acc + ele, 0)
                   sum = Math.max(sumIterateed, sum)
               }
               return sum
        */

        //Doble Pointer
        let sum = 0
        for (let i = 0; i < accounts.length; i++) {
            let parcial = 0
            let left = 0
            let right = accounts[i].length - 1

            while (left <= right) {
                parcial += accounts[i][left]

                if (left !== right) {
                    parcial += accounts[i][right]
                }
                left++
                right--
                sum = Math.max(sum, parcial)
            }
        }
        return sum
    },
    missingNumber(nums) {
        //https://leetcode.com/problems/missing-number
        /*
                nums.sort((a, b) => a - b)
                for (let i = 0; i <= nums.length - 1; i++) {
                    if (nums[i] !== i) return i
                }
                return nums.length
                */
        const numSet = new Set(nums)
        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(i)) return i
        }
        return nums.length;
    },
    isPalindrome(x) {
        //https://leetcode.com/problems/palindrome-number/
        /*
        const xToStr = x.toString()
        let left = 0
        let right = xToStr.length - 1

        while (left <= right) {
            if (xToStr[left] !== xToStr[right]) {
                return false
            }
            left++
            right--
        }
        return true
        */
        x = x.toString()
        let mid = x.length / 2 + 1
        for (let index = 0; index < mid; index++) {
            left = x[index]
            right = x[x.length - index - 1]
            if (left != right) {
                return false
            }
        }

        return true
    },
    romanToInt(string) {
        const romanDict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

        let ans = 0
        /*         for (let i = 0; i <= string.length - 1; i++) {
        
                    if (string[i] === 'I' && string[i + 1] === 'V') {
                        ans += 4
                        i++
                    } else if (string[i] === 'I' && string[i + 1] === 'X') {
                        ans += 9
                        i++
                    } else if (string[i] === 'X' && string[i + 1] === 'L') {
                        ans += 40
                        i++
                    } else if (string[i] === 'X' && string[i + 1] === 'C') {
                        ans += 90
                        i++
                    } else if (string[i] === 'C' && string[i + 1] === 'D') {
                        ans += 400
                        i++
                    } else if (string[i] === 'C' && string[i + 1] === 'M') {
                        ans += 900
                        i++
                    } else ans += romanDict[string[i]]
                } */

        for (let i = 0; i < string.length; i++) {
            let current = string[i]
            let prox = string[i + 1]

            if (romanDict[current] < romanDict[prox]) {
                ans += romanDict[prox] - romanDict[current]
                i++
            } else {
                ans += romanDict[current]
            }

        }
        return ans
    },
    longestCommonPrefix(strs) {
        //https://leetcode.com/problems/longest-common-prefix/
        let [prefix, ...words] = strs

        let i = 0;
        while (i < words.length) {
            if (!words[1].startsWith(prefix)) {
                prefix = prefix.slice(0, -1)
            } else {
                i++
            }
        }
        return prefix
    },
    groupThePeople(groupSizes) {
        //https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
        let hashMap = new Map()
        let ans = []
        /*         for (const i in groupSizes) {
                    const num = groupSizes[i];
        
                    if (hashMap.has(num)) {
                        let { count, ids } = hashMap.get(num)
                        hashMap.set(num, { count: ++count, ids: [...ids, i] })
                    } else {
                        hashMap.set(num, { count: 1, ids: [i] })
                    }
                }
                hashMap.forEach(({ count, ids }, key) => {
                    let i = 0
                    while (count >= key) {
                        let parcial = ids.slice(i, key + i)
                        count -= key
                        i += key
                        ans.push(parcial)
                    }
                })
                return ans */

        for (let i = 0; i <= groupSizes.length - 1; i++) {
            const size = groupSizes[i]
            if (!hashMap.has(size)) hashMap.set(size, [])
            hashMap.get(size).push(i)

            if (hashMap.get(size).length === size) {
                ans.push(hashMap.get(size))
                hashMap.set(size, [])
            }
        }
        return ans
    },
    smallerNumbersThanCurrent(nums) {
        //https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
        let ans = []
        for (const i in nums) {
            let count = 0;
            for (const j in nums) {
                if (i === j) continue
                if (nums[j] < nums[i]) count++
            }
            ans.push(count)
        }
        return ans
    },
    findSubstring(s, words) {
        //https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
        const possibilties = []

        for (let i = 0; i < words.length; i++) {
            let word = words[i]
            let count = 0
            for (let j = 0; j < words.length; j++) {
                if (i === j) continue;
                count++

                word += words[j]
                if (count === words.length - 1) {
                    possibilties.push(word)
                    count = 0
                }
            }
        }

        let ans = []
        possibilties.forEach(word => {
            const idx = s.indexOf(word)
            if (idx !== -1) {
                ans.push(idx)
            }
        })
        return ans
    },
    arrayStringsAreEqual(word1, word2) {
        //https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
        const allW1 = word1.join("");
        const allW2 = word2.join("");

        return allW1 === allW2;
    },
    countMatches(items, ruleKey, ruleValue) {
        //https://leetcode.com/problems/count-items-matching-a-rule/description/

        const keyMap = {
            type: 0,
            color: 1,
            name: 2
        }
        return items.reduce((count, item) => {
            if (item[keyMap[ruleKey]] === ruleValue) count++
            return count;
        }, 0)
    },
    maxFrequencyElements(nums) {
        //https://leetcode.com/problems/count-elements-with-maximum-frequency

        const trackFrequency = {}
        let maxFreq = 0
        for (const num of nums) {
            trackFrequency[num] = (trackFrequency[num] || 0) + 1
            maxFreq = Math.max(maxFreq, trackFrequency[num])
        }

        let ans = 0
        for (const key in trackFrequency) {
            if (trackFrequency[key] === maxFreq) ans += trackFrequency[key]
        }
        return ans;
    },
    groupAnagrams(strs) {
        let ans = [[strs[0]]]

        for (let i = 1; i < strs.length; i++) {

            console.log("ia", includeAll(strs[i]))
            const idx = includeAll(strs[i])
            if (!idx) {
                ans.push([strs[i]])
            } else {
                ans[idx].push(strs[i])
            }

        }
        return ans

        function includeAll(word) {
            for (const idx in ans) {
                const arr = ans[idx][0]
                if ([...word].every(w => arr.includes(w)) && word.length === arr.length) {
                    return idx;
                }
            }
            return null
        }
    },
    numSubarraysWithSum(nums, goal) {
        //https://leetcode.com/problems/binary-subarrays-with-sum
        let count = new Map();
        count.set(0, 1);
        let currSum = 0;
        let totalSubarrays = 0;

        for (let num of nums) {
            currSum += num;
            const haveIt = count.has(currSum - goal)
            if (haveIt) {
                totalSubarrays += count.get(currSum - goal);
            }
            count.set(currSum, (count.get(currSum) || 0) + 1);
        }

        return totalSubarrays;
    },
    singleNumber(nums) {
        //https://leetcode.com/problems/single-number/
        let countMap = new Map()
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1)
        }

        for (const [key, value] of countMap) {
            if (value === 1) return key
        }
    },
    containsDuplicate(nums) {
        //https://leetcode.com/problems/contains-duplicate/
        const countMap = new Map()
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        console.log(countMap)
        for (const [, value] of countMap) {
            if (value >= 2) return true;
        }
        return false;
    },
    numberGame(nums) {
        //https://leetcode.com/problems/minimum-number-game/
        const ans = []

        while (nums.length > 0) {
            const min = Math.min(...nums)
            const idx = nums.indexOf(min)
            nums.splice(idx, 1)
            const min2 = Math.min(...nums)
            const idx2 = nums.indexOf(min2)
            nums.splice(idx2, 1)
            ans.push(min2, min)
        }

        return ans;
    },
    maxProductDifference(nums) {
        //https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
        nums.sort((a, b) => b - a)

        return (nums[0] * nums[1]) - (nums.at(-1) * nums.at(-2))
    },
    maxProduct(nums) {
        //https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
        nums.sort((a, b) => b - a)
        return (nums[0] - 1) * (nums[1] - 1)
    },
    timeRequiredToBuy(tickets, k) {
        //https://leetcode.com/problems/time-needed-to-buy-tickets/

        let count = 0;
        let i = 0
        while (tickets[k] > 0) {
            if (tickets[i] === 0) {
                i++
                continue
            };
            tickets[i]--
            i++

            if (i === tickets.length && tickets[k] > 0) i = 0;
            count++
        }
        return count;
    },
    vowelStrings(words, queries) {
        // SLOW ONE
        //https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

        const isValid = word => /^[aeiou]$|^[aeiou].*[aeiou]$/.test(word)
        const res = [];
        queries.forEach(([from, to]) => {
            console.log(from, to)
            let count = 0;
            for (let i = from; i < words.length; i++) {
                if (i > to) break;
                const element = words[i];
                console.log(element, isValid(element))
                count += isValid(element) ? 1 : 0;
                console.log("COUNT", count)
            }
            res.push(count)
            console.log('-----------------------------');
        });

        return res
    },
    vowelStrings2(words, queries) {
        // FAST ONE
        //https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

        const prefix = Array.from({ length: words.length + 1 }, () => 0)

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            prefix[i + 1] = /^[aeiou]$|^[aeiou].*[aeiou]$/.test(word) ? prefix[i] + 1 : prefix[i]
        }

        const res = []
        queries.forEach(([from, to]) => {
            res.push(prefix[to + 1] - prefix[from])
        })

        return res;
    },
    waysToSplitArray(nums) {
        //https://leetcode.com/problems/number-of-ways-to-split-array/description

        const sums = (arr) => {
            //console.log(arr)
            return arr.reduce((acc, ele) => acc + ele, 0)
        }
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            const left = sums([...nums].slice(0, i + 1))
            const right = sums([...nums].slice(i + 1))

            const rightOfI = [...nums].slice(i+1)
            console.log({ left,right,rightOfI })

            if(left >= right  ){
                count++
            }
        }
        return count

    }

    /*
The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 <= i < n - 1.
    */
}

console.log(exercises.waysToSplitArray([10, 4, -8, 7])) //2
