/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ascNums = [...nums].sort((a, b) => a - b)
    let result = []

    const indexMap = new Map()
    for (let i = 0; i < ascNums.length; i++) {
        if (!indexMap.has(ascNums[i])) {
            indexMap.set(ascNums[i], i)
        }
    }

    for (let num of nums) {
        result.push(indexMap.get(num))
    }

    return result
}