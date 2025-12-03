/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length
    let count = Array(n).fill(0)

    let duplicate = 0
    let missing = 0

    for (let num of nums) {
        count[num - 1]++
    }

    for (let i = 0; i < n; i++) {
        if (count[i] > 1) duplicate = i + 1
        else if (count[i] === 0) missing = i + 1
    }

    return [duplicate, missing]
}