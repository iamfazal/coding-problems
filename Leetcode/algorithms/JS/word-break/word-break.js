/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    let totalLen =s.length;
    let dp= new Array(totalLen+1).fill(false);
    dp[0]= true;
    for(let i=0; i<totalLen; i++){
        if(!dp[i]) continue;
        for(let word of wordDict){
            let endIndex = word?.length +i;
            if(endIndex <= totalLen && s.substring(i,endIndex) == word)
                dp[endIndex]=true
        }
    }
    return dp[totalLen]
};