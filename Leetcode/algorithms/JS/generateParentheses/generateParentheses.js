var generateParenthesis = function (n) {
    let result= [];

    var generate = function (o, c, val) {
        if (o == n && c == n){
            result.push(val)
            return;
        }
        
        // open new parenthesis
        if (o< n) 
            generate(o + 1, c, val + "(", )
            
        
        // close condition
        if (c<o) 
            generate(o, c + 1, val + ")", )
        
    }

    generate(0, 0, "")
    console.log(result)
};



generateParenthesis(3)