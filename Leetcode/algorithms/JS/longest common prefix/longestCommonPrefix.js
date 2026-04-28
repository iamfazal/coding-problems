/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
 
    let first=strs?.[0];
    for(let i=first.length; i>=0;i--){
     let prefix= first?.substring(0,i);
     if(strs.every(word=> word.startsWith(prefix)))
         return prefix;
    }
    return ""
 };