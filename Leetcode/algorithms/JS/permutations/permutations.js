/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result=[]
    let backtrack = (arr=[])=>{

        if(arr?.length == nums?.length){
            console.log(arr)
            result.push(arr)
            return;
        }
        for(let i=0; i< nums?.length ; i++)
            if(!arr?.includes(nums[i]))
                backtrack([...arr, nums[i]])
    }

    backtrack();
    return result;
};