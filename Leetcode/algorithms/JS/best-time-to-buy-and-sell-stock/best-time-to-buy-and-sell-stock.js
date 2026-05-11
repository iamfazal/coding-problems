// iamfazal

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyMin = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices?.length; i++) {
        buyMin = Math.min(prices[i], buyMin);
        let profit = prices[i] - buyMin;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};