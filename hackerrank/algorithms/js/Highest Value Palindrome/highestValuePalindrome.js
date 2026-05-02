function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changed = new Array(n).fill(false);

    let l = 0, r = n - 1;

    // Step 1: make palindrome with minimum changes
    while (l < r) {
        if (arr[l] !== arr[r]) {
            let maxChar = arr[l] > arr[r] ? arr[l] : arr[r];
            arr[l] = arr[r] = maxChar;
            changed[l] = changed[r] = true;
            k--;
        }
        l++;
        r--;
    }

    if (k < 0) return "-1";

    // Step 2: maximize value
    l = 0;
    r = n - 1;

    while (l <= r) {
        if (l === r) {
            if (k > 0) arr[l] = '9';
        }

        if (arr[l] < '9') {
            if (changed[l] || changed[r]) {
                if (k >= 1) {
                    arr[l] = arr[r] = '9';
                    k--;
                }
            } else {
                if (k >= 2) {
                    arr[l] = arr[r] = '9';
                    k -= 2;
                }
            }
        }

        l++;
        r--;
    }

    return arr.join('');
}