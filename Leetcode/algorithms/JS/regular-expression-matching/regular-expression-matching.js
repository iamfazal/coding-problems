/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let map=new Map();

    const dfs = (i,j)=>{
        let key = i+","+j;
        if(map.has(key)) return map.get(key);

        if(i >= s.length && j >= p.length)
            return true;
        if(j>= p.length)
            return false;

        let match = i< s.length && (s[i]==p[j] || p[j]==".")

        if((j+1)<p.length && p[j+1] == "*"){
            let res= dfs(i,j+2) || //use the *
                   (match && dfs(i+1,j))     // don't use the *
            map.set(key,res)
            return res;
        }

        if(match){
            let res= dfs(i+1,j+1);
            map.set(key,res)
            return res;

        }

        return false;
    }

    // console.log(dfs(0,0))
    return dfs(0,0);
};