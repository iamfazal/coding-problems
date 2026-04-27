function superReducedString(s) {
    // Write your code here
    let stack=  [];
    for(let c of s){
        if(stack?.length && stack?.[stack?.length-1]==c)
            stack.pop();
        else
            stack.push(c);
    }
    return stack?.length ? stack?.join("") : "Empty String";
}