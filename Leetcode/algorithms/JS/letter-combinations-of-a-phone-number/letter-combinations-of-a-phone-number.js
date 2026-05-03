/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const map = {
        2: "abc", 3: "def",
        4: "ghi", 5: "jkl",
        6: "mno", 7: "pqrs",
        8: "tuv", 9: "wxyz"
    };

    let result=[];

    let backtrack = (index,path)=>{

        if(path?.length == digits?.length){
            result.push(path)
            return;
        }
        let letters=map[digits[index]];
        for(let ch of letters){
            backtrack(index+1,path+ch);
        }
    }

    backtrack(0,"");
    return result;
};