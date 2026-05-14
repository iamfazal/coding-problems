// iamfazal

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums = nums.sort((a, b) => a - b);

    let used = new Array(nums.length).fill(false);
    let result = [];

    let permutation = (arr = []) => {
        if (arr.length == nums.length) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < nums?.length; i++) {
            if (
                used[i] ||
                (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])
            )
                continue;

            used[i] = true;
            arr.push(nums[i]);
            permutation(arr);
            used[i] = false;
            arr.pop();
        }
    };

    permutation();
    return result;
};
