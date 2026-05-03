/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1;
    let j = needle.length;
    for (let j = 0; j <= haystack.length - needle.length; j++) {
        let sub = haystack.substring(j, needle.length+j)
        if(sub == needle)
            return j;
    }
    return -1;
};