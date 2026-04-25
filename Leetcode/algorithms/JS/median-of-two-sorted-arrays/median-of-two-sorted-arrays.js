/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // nums1 = [], nums2 = [1];
    let totalLen = nums1?.length + nums2?.length;
    if (totalLen == 1) {
        return [...nums1, ...nums2]?.[0]
    }
    let loopIteration = ~~(totalLen / 2) + 1;
    let num1Index = 0; num2Index = 0;
    let newArr = [];
    for (let i = 0; i < loopIteration; i++) {
        let n1=nums1?.[num1Index], n2=nums2?.[num2Index];

        if (n1 <= n2 && nums1?.length > num1Index) {
            console.log("here if")
            newArr.push(nums1[num1Index++]);
        }
        else if(n2 < n1 && nums2?.length > num2Index){
            console.log("here else")
            newArr.push(nums2[num2Index++]);
        }
        else{
            console.log("here ===>>>")
            if(n1)
                newArr.push(nums1[num1Index++]);
            else 
                newArr.push(nums2[num2Index++]);
        }
    }
    console.log(newArr, totalLen)
    if (totalLen % 2 == 0) {
        let sum = newArr?.at(-1) + newArr?.at(-2)
        return sum ? sum / 2.00 : 0.00;
    }
    else
        return newArr?.at(-1) * 1.00
};