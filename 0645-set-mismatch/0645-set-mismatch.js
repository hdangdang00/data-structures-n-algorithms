/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let repetitionNum = 0
    let lossNum = 0
    for (let i = 0; i < nums.length; i++) {
        const _nums = nums.filter(num => num === i + 1)
        if (_nums.length > 1) repetitionNum = i + 1
        else if (_nums.length === 0) lossNum = i + 1
    }
    return [repetitionNum, lossNum]
}