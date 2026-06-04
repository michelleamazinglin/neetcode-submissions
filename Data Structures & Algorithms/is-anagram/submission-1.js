class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        let count = {}
        for (let char of s) {
            if (!count[char]) {
                count[char] = 0
            }
            count[char] += 1
        }

        for (let char of t) {
            count[char] -= 1
        }

        for (let key in count) {
            if (count[key] != 0) {return false}
        }
        return true

    }
}
