/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let totalLen = nums?.length;
    let result = [];
    console.log(nums)
    for (let i = 0; i < totalLen - 3; i++) {
        // skip duplicate from i
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        for (let j = i + 1; j < totalLen - 2; j++) {
            // skip duplicate form j
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue;

            let left = j + 1;
            let right = totalLen - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])

                    // skip duplicate from left and right
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++
                    right--
                }
                else if (sum < target)
                    left++
                else
                    right--
            }

        }
    }

    return result;
};