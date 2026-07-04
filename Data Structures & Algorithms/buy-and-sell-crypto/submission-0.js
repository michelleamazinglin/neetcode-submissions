class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            let buy = prices[i];
            for (let j = i + 1; j < prices.length + 1; j++) {
                let sell = prices[j];
                if (sell > buy) {
                    profit = Math.max(sell-buy, profit)
                }
            }
        }
        return profit;
    }
}
