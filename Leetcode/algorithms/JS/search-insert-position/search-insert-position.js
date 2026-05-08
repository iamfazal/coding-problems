/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let left=0,right=nums?.length;
    let mid=0;
    while(left<=right){
        mid = Math.ceil((left+right)/2);

        if(nums[mid]==target)
            return mid;
        else if(nums[mid] <= target)
            left = mid+1;
        else
            right= mid-1;
    }
    // return nums[mid] < target ? mid+1 : mid;
    return left;
};