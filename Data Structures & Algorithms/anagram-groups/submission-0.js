class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let words = {}
        for (let str of strs) {
            let word = str.split("").sort().join()
            if (!words[word]) {
                words[word] = []
            }
            words[word].push(str)
        }
        return Object.values(words)
    }
}
