class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let i = s.split("").sort()
        let j = t.split("").sort()
        if (i.length != j.length){
            return false
        }
        for (let n=0; n < i.length; n++){
            if(i[n] != j[n]){
                return false
            }
        }
        return true;
    }
}
