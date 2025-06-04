
const exercises = {
    defangIPaddr() {
        //https://leetcode.com/problems/defanging-an-ip-address/
        return address.replace(/\./g, '[.]')
    },
    lengthOfLastWord(s) {
        //https://leetcode.com/problems/length-of-last-word/
        /*      s = s.trim()
             let maxString = -Infinity
             let subStr = ''
             for (let i = s.length - 1; i >= 0; i--) {
     
                 if (/\w/.test(s[i])) {
                     subStr += s[i]
                     maxString = Math.max(maxString, subStr.length)
                 } else {
                     break;
                 }
             }
             return maxString */

        s = s.trim()
        return s.split(" ").at(-1).length
    },
    strStr(haystack, needle) {
        //https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
        return haystack.indexOf(needle)
    },
    numJewelsInStones(jewels, stones) {
        //https://leetcode.com/problems/jewels-and-stones/
        const stoneMap = {}
        for (const char of stones) {
            stoneMap[char] = (stoneMap[char] || 0) + 1
        }

        let ans = 0
        for (const jewel of jewels) {
            ans += stoneMap[jewel] ?? 0
        }
        return ans
    },
    interpret(command) {
        //https://leetcode.com/problems/goal-parser-interpretation
        const dict = {
            "()": "o",
            "(al)": "al"
        }
        return command.replace(/\(\)|\(al\)/g, (x => dict[x]))
    },
    mostWordsFound(sentences) {
        //https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
        /*   let ans = -Infinity
          let left = 0
          let right = sentences.length - 1
  
          while (left <= right) {
              let x = sentences[left].split(" ").length
              if (left === right) {
                  ans = Math.max(ans, x)
                  break;
              } else {
                  let z = sentences[right].split(" ").length
                  ans = Math.max(ans, x, z)
                  left++
                  right--
              }
          }
          return ans */

        return Math.max(...sentences.map(sentence => sentence.split(" ").length))
    },
    encodeAndDecode(url) {
        //https://leetcode.com/problems/encode-and-decode-tinyurl/
        class Solution {
            url;
            mappedUrls = {}
            constructor(url) {
                this.url = url
            }
            encode(url) {
                const { pathname } = new URL(url)
                const newUrl = `https://tinyUrl.com${pathname}`
                this.mappedUrls[newUrl] = url
                return newUrl
            }
            decode(tinyUrl) {
                return this.mappedUrls[tinyUrl]
            }
        }
        const obj = new Solution(url);
        let tiny = obj.encode(url); // returns the encoded tiny url.
        console.log("t", tiny)
        let ans = obj.decode(tiny); // returns the original url after decoding it.
        console.log("a", ans)
    },
    balancedStringSplit(s) {
        //https://leetcode.com/problems/split-a-string-in-balanced-strings/
        let ans = 0;
        let res = 0
        for (const char of s) {
            if (char === "R") {
                res++
            } else {
                res--
            }
            if (res === 0) ans++
        }
        return ans
    },
    lengthOfLongestSubstring(string) {
        //https://leetcode.com/problems/longest-substring-without-repeating-characters/

        let word = '';
        let max = 0;

        for (let i = 0; i < string.length; i++) {
            let countMap = { [string[i]]: true };

            word += string[i];

            for (let j = i + 1; j < string.length; j++) {
                if (countMap[string[j]]) break;

                countMap[string[j]] = true;
                word += string[j];

                if (max > string.slice(j)) break;
            }
            max = Math.max(max, word.length)
            word = '';

            if (max > string.slice(i)) break;
        }
        return max;
    },
    decodeMessage(key, message) {
        const alphabeth = {
            0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j',
            10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't',
            20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'
        };

        const dict = {}
        let idx = 0
        for (const char of key) {
            if (char === ' ') continue;
            if (!dict[char]) {
                dict[char] = alphabeth[idx]
                idx++
            }
        }

        let ans = '';
        for (const char of message) {
            ans += dict[char] ?? ' '
        }
        return ans;
    },
    sortSentence(s) {
        //https://leetcode.com/problems/sorting-the-sentence/
        /*         const hash = {}
        
                const splitSentence = s.split(" ")
                for (const word of splitSentence) {
                    const justWord = word.slice(0, -1)
                    const number = word.at(-1)
                    hash[number] = justWord
                }
        
                let ans = ""
                for (let i = 1; i <= splitSentence.length; i++) {
                    ans +=hash["" + i]+" "
                }
                return ans; */
        const splittedS = s.split(" ")
        let tmp = []
        for (let i = 0; i < splittedS.length; i++) {
            const index = Number(splittedS[i].at(-1) - 1);
            const word = splittedS[i].slice(0, -1);
            tmp[index] = word;
        }

        return tmp.join(" ")
    },
    longestPalindrome(s) {
        const isPalindrome = str => {
            str = str.toLowerCase()
            let left = 0
            let right = str.length - 1;

            while (left <= right) {
                if (str[left] !== str[right]) {
                    return false
                }
                left++
                right--
            }
            return true
        }

        let word = s[0]
        let len = ''
        for (let i = 0; i < s.length; i++) {
            let substr = s[i]
            for (let j = i + 1; j < s.length; j++) {
                substr += s[j]
                if (isPalindrome(substr) && substr.length > len) {
                    word = substr;
                    len = substr.length;
                }
            }
        }
        return word;
    },
    countAndSay(string) {
        let result = "";

        const count = new Map()
        for (let i = 0; i < string.length; i++) {
            const element = string[i];

            count.set(element, (count.get(element) || 0) + 1)


            if (string[i + 1] !== element) {
                result += `${count.get(element)}${element}`
                count.clear()
            }
        }
        return result;
    }
}


console.log("->", exercises.countAndSay("112211"))


