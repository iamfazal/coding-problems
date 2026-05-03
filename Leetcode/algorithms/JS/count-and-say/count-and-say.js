/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n==1) return "1";

    let encode = (ind,val)=>{
        if(ind==n)
            return val
        let encoded = convert(val)
        return encode(ind+1, encoded =="" ? "1": encoded)
    }

    let result = encode(0,"")
    return result;
};

const convert = (str)=>{
    let key=str?.[0], val=1;
    let encoded="";
    for(let i=1;i<=str?.length; i++){
        if(key == str[i])
            val++
        else{
            encoded+= val+""+key
            key=str[i]
            val=1
        }
    }
    return encoded;
}