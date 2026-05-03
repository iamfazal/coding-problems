/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let table = new Map();
    for (let word of strs) {
        let str = word.split("").sort().join('')
        if (table.has(str))
            table.get(str).push(word)
        else
            table.set(str, [word])
    }
    return Array.from(table.values())
};