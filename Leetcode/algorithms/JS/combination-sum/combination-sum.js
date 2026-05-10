// iamfazal

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let backtrack = (index,sum, arr)=>{

        if (sum == target) {
            result.push(arr)
            return;
        }

        for (let i =index; i < candidates?.length; i++) {

            if (sum + candidates[i] <= target) {
                backtrack(i,sum + candidates[i],[...arr,candidates[i]])
            }
        }

    }

    backtrack(0, 0, []);

    return result;
};