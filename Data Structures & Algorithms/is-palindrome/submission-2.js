class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;
        while (left < right) {
            while (left < right && !this.isValid(s[left])){
                left++;
            }
            while (left < right && !this.isValid(s[right])){
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }
            left++;
            right--;
        }
        return true
    }

    isValid(char) {
        const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return validChars.includes(char);
    }
}
