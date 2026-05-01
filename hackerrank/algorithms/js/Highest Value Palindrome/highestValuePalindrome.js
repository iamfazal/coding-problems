function highestValuePalindrome(s, n, k) {
    // Write your code here
    let arr= s?.split('');
    let l=0, r=n-1;
    let changed = new Array(n).fill(false);

    while(l<r){
        if(arr?.[l] != arr?.[r]){
            let max = arr?.[l] > arr?.[r] ? arr[l] : arr[r];
            arr[l]=arr[r]= max;
            changed[l]=changed[r]=true;
            k--
        }
        l++;
        r-- 
    }
    
    if (k < 0) return "-1";
    if(k>0){
        let l=0, r=n-1;
        
        while(l<=r){
            
            if(l==r){
                if(k==1)
                    arr[l] = '9';
            }
            
            if(arr[l]<9){
                if(k>=1){
                    if(changed[l] || changed[r]){
                         arr[l] = arr[r] = '9';
                         k--;
                    }   
                }
                else {
                if (k >= 2) {
                    arr[l] = arr[r] = '9';
                    k -= 2;
                }
            }
            }
            
            l++;
            r--;
        }
    }
    
    return arr?.join('');
}