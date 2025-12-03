/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length
    let result = Array(n)
    let ascNums = [...nums].sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        result[i] = ascNums.indexOf(nums[i])
    }

    return result
}