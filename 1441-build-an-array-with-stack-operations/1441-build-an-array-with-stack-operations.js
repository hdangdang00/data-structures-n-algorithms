/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = []
    let targetIdx = 0

    for (let i = 0; i < target[target.length - 1]; i++) {
        result.push("Push")
        if (target[targetIdx] != i + 1) {
            result.push("Pop")
        } else {
            targetIdx++
        }
    }

    return result
}