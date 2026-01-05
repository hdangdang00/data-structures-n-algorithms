/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = []
    let answer = [...prices]

    for (let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const index = stack.pop()
            answer[index] -= prices[i]
        }
        stack.push(i)
    }

    return answer
}