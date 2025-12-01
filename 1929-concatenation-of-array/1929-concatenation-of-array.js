/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = []
    let len = nums.length
    for (i = 0; i < len; i++) {
        ans[i] = nums[i]
        ans[i + len] = nums[i]
    }
    return ans
}