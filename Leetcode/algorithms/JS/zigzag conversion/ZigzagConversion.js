/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1)
        return s;
    let str = new Array(numRows).fill("");;
    let dir=1, index=0;
    for(let i=0; i < s?.length; i++){
        if(index+1 == numRows)
            dir=-1;
        else if(index==0)
            dir=1;
        str[index]+=s?.[i]

        index+=dir;
        
    }
    console.log(str)
    return str?.join("")
};