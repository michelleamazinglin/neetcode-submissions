class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];
        let map = {
            ")":"(",
            "}":"{",
            "]":"["
        }

        for (let char of s){
            if(!map[char]){
                stack.push(char)
                console.log(char)
            } else {
                if ( stack.length == 0 || stack[stack.length-1] !== map[char]){
                    console.log(stack)
                    return false
                } else {
                    console.log(stack[stack.length-1])
                    stack.pop()
                }
            }
            
        }

        return stack.length == 0;
    }
}
