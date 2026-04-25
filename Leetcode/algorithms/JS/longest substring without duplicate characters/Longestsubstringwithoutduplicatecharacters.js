/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(),left=0, maxLen=0;

    for (let right= 0; right<s.length; right++){
        let char = s[right];
        while(set.has(char)){
            set.delete(s[left])
            left++;
        }
        set.add(char);
        maxLen= Math.max(maxLen, (right-left)+1);
    }

    return maxLen;
};