/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    return fibWithMemory(n, new Map())
};
let fibWithMemory = (num, memory) => {
    if (num === 0) return 0;
    if (num === 1) return 1;

    if (memory.has(num))
        return memory.get(num);

    let fibo = fibWithMemory(num - 1, memory) + fibWithMemory(num - 2, memory);
    memory.set(num, fibo)
    return fibo
}