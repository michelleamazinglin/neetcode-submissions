class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let hash = {}
        for (let i = 0; i<s.length; i++){
            if (!hash[s[i]]) {
                hash[s[i]] = 0
            }
            hash[s[i]] += 1;
        }
        for (let j = 0; j<s.length; j++) {
            if (!hash[t[j]]){
                return false
            }
            hash[t[j]] -= 1;
        }

        Object.values(hash).forEach(value => {
            if (value != 0) {
                return false
            }
        })
        
        return true
    }
}
