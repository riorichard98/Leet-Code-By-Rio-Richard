function maxProfit(prices){
    let lowest = prices[0]
    let profit = 0
    for(let i = 1 ;i < prices.length ; i++){
        if(prices[i] < lowest) lowest = prices[i]
        if(profit < (prices[i] - lowest)) profit = prices[i] - lowest
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]));