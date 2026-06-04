class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        let res = []
        for (let num of nums) {
            if (!count[num]) {
                count[num] = 0;
            }
            count[num] += 1;
        }
        
        let reskey = 0
        for (let i = 0; i < k; i++) {
            let max = 0
            for ( let [key, value] of Object.entries(count)){
                if (value >= max) {
                    max = value; 
                    reskey = key;
                }         
            }
        res.push(reskey)
        count[reskey] = 0;
        }
        
        return res
    }
}
