class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        const length = nums.length;
        let max = 0;
        for (let i = 0; i < length; i++) {
            let count = 0;
            for (let j = i; j < length; j++){
                if (nums[j] === 0) {
                    break;
                } else {
                    count ++;
                }
            }
            if (max < count) { max = count; }
        }
        return max;
    }
}
