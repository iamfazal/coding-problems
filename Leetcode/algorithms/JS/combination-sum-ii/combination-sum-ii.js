// iamfazal

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates = candidates?.sort((a, b) => a - b);

    let result = [];

    let backtrack = (index, sum, arr) => {
        if (sum == target) {
            result.push([...arr]);
            return;
        }

        for (let i = index; i < candidates?.length; i++) {
            // skip duplicates
            if (i > index && candidates[i] === candidates[i - 1]) continue;

            let currentSum = sum + candidates?.[i];
            arr.push(candidates?.[i]);
            if (currentSum <= target) backtrack(i + 1, currentSum, arr);
            arr.pop();
        }
    };

    backtrack(0, 0, []);

    return result;
};