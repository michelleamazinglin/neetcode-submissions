class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for (let num of nums) {
            if (!count[num]) {
                count[num] = 0;
            }
            count[num] += 1;
        }
        let res = []
        for (let i = 0; i < k; i++) {
            let max = 0
            let maxkey = 0
            for (let [key, value] of Object.entries(count)) {
                if (value > max) {
                    max = value
                    maxkey = key
                }
            }
            res.push(maxkey)
            count[maxkey] = 0;
        }
        return res
    }
}
