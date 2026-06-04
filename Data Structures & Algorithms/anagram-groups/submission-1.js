class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let words = {}
        for (let str of strs) {
            // let word = str.split("").sort().join()
            // if (!words[word]) {
            //     words[word] = []
            // }
            // words[word].push(str)
            
            // try hash map version

            let count = new Array(26).fill(0)
            for (let char of str) {
                let index = char.charCodeAt(0) - 97
                count[index] += 1;
            }
            if (!words[count]){
                words[count] = []
            }
            words[count].push(str)
        }
        return Object.values(words)
    }
}
