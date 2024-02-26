
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
    }
}


console.log(exercises.balancedStringSplit('RLRRLLRLRL'))