function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // x1 + v1*t = x2 + v2*t
    // (x1-x2) = (v2-v1)*t
    // t = (x1-x2)/(v2-v1)
    
    if(x1 == x2)
        return v1 == v2 ? "YES" : "NO";
        
    let differentInPosition = x2-x1;
    let differentInSpeed = v1-v2;
    
    let numberOfJumps = differentInPosition/differentInSpeed;
    
    if(differentInSpeed==0) return "NO"
    
    if(differentInPosition%differentInSpeed ==0 && numberOfJumps >=0)
        return "YES"
    
    return "NO"
}