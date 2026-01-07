/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []
    let answer = [...heights]

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const index = stack.pop()
            const rb = i
            const lb = stack.length > 0 ? stack[stack.length - 1] : -1
            const width = rb - lb - 1
            const height = heights[index]
            answer[index] = width * height
        }
        stack.push(i)
    }

    while (stack.length > 0) {
        const index = stack.pop()
        const rb = heights.length
        const lb = stack.length > 0 ? stack[stack.length - 1] : -1
        const width = rb - lb - 1
        const height = heights[index]
        answer[index] = width * height
    }

    return Math.max(...answer)
}