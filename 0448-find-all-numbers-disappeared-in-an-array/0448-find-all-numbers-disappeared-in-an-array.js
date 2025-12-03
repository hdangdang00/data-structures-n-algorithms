/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let originSet = new Set([...Array(n)].map((_, i) => i + 1))
    let numSet = new Set(nums)

    return [...originSet.difference(numSet)]
}