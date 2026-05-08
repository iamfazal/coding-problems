/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    
    let leftSide = () => {
        let left = 0, right = nums?.length - 1;
        let ans = -1;
        while (left <= right) {
            let mid = ~~((left + right) / 2);

            if (nums[mid] == target) {
                ans = mid;
                right = mid - 1; // keep searching LEFT
            }
            else if (target <= nums[mid])
                right = mid - 1
            else
                left = mid + 1
        }
        return ans;
    }
    let rightSide = () => {
        let left = 0, right = nums?.length - 1;
        let ans = -1;
        while (left <= right) {
            let mid = ~~((left + right) / 2);

            if (nums[mid] == target) {
                ans = mid;
                left = mid +1; // keep searching Right
            }
            else if (target <= nums[mid])
                right = mid - 1
            else
                left = mid + 1
        }
        return ans;
    }

    return [leftSide(),rightSide()]
};