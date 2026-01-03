/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const result = Array(n).fill(0)
    const stack = []
    let prevTimestamp = 0
    for (let log of logs) {
        let [id, type, timestamp] = log.split(':')
        id = Number(id)
        timestamp = Number(timestamp)
        if (type === 'start') {
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += (timestamp - prevTimestamp)
            }
            stack.push(id)
            prevTimestamp = timestamp
        } else if (type === 'end') {
            result[stack.pop()] += (timestamp - prevTimestamp + 1)
            prevTimestamp = timestamp + 1
        }
    }
    return result
}