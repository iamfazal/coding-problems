function marsExploration(s) {
    
    let count=0;
    let sos="SOS";
    for(let i=0; i<s.length; i++){
        console.log(s?.[i],sos?.[i%3])
        if(s?.[i]!=sos?.[i%3])
            count++
    }
    
    return count;
}