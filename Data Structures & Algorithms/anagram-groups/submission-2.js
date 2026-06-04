class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let str of strs) {
        let array = new Array(26).fill(0)
            for (let letter of str) {
                let index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
                array[index] += 1;
            }
        if (!map[array]){
            map[array] = []
        }
        map[array].push(str)
        }
        return Object.values(map)
    }
}
