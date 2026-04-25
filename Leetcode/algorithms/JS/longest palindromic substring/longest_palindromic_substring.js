/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if(s?.length<2)
        return s;
    let longestSubString="";

    for(let i=1; i<s?.length; i++){
        let left=i,right=i;

        while(s?.[left] == s?.[right]){
            left--;
            right++;
            if(left==-1 || right>s.length-1)
                break;
        }
        console.log(left,right)
        let subString= s?.substring(left+1,right);
        if(subString?.length>longestSubString?.length)
            longestSubString=subString;

        // check for even
        left=i-1,right=i;

        while(s?.[left] == s?.[right]){
            left--;
            right++;
            if(left==-1 || right>s.length-1)
                break;
        }
        subString= s?.substring(left+1,right);
        if(subString?.length>longestSubString?.length)
            longestSubString=subString;
    }

    return longestSubString;
};