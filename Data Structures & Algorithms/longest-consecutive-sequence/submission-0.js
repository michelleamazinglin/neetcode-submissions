class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // return a number
    //  O(n)
    // 
    longestConsecutive(nums) {
        let uniqueNums = new Set(nums);
        let longest = 0;

        for (let num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                let length = 0;
                while (uniqueNums.has(num + length)) {
                    length ++
                }
                longest = Math.max(length, longest);
            }
            
        }
        return longest

    }
}
