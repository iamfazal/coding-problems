function hackerrankInString(s) {
    // Write your code here
    let i=0, j=0;
    let hackerrank="hackerrank";
    while(i< hackerrank?.length && j< s?.length){
        if(hackerrank?.[i] == s?.[j]){
            i++;
            j++;
        }
        else 
            j++
    }
    return i==hackerrank?.length ? 'YES' : 'NO'
}