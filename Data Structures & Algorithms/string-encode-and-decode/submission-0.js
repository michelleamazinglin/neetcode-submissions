class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let s of strs) {
            let length = s.length
            let string = length + "#" + s
            res = res + string;
        }
        return res   
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0;

        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }
            let length = Number(str.substring(i,j))
            let word = str.substring(j+1, j+1+length);
            res.push(word)
            i = j+1+length
        }

        return res
    }
}
