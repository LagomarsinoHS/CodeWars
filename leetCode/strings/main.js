
const exercises = {
    defangIPaddr() {
        //https://leetcode.com/problems/defanging-an-ip-address/
        return address.replace(/\./g, '[.]')
    },
    lengthOfLastWord(s) {
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

        s=s.trim()
        return s.split(" ").at(-1).length
    }
}


console.log(exercises.lengthOfLastWord("hellossad World"))
console.log(exercises.lengthOfLastWord("a"))
console.log(exercises.lengthOfLastWord("luffy is still joyboy"))