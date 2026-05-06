function icecreamParlor(m, arr) {
    // Write your code here
    let remainingMap = new Map();
    for(let i = 0; i<arr.length; i++){
        let remaining = m- arr[i];
        if(remainingMap.has(arr[i])){
           let val=remainingMap.get(arr[i])
           return [val, i+1]
        }
        remainingMap.set(remaining, i+1)
    }
    return [0,0]
}