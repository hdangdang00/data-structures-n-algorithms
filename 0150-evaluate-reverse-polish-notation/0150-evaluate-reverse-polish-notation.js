/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numbers = []
    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            let num1 = numbers.pop()
            let num2 = numbers.pop()
            switch (token) {
                case '+':
                    numbers.push(num2 + num1)
                    break
                case '-':
                    numbers.push(num2 - num1)
                    break
                case '*':
                    numbers.push(num2 * num1)
                    break
                case '/':
                    numbers.push(Math.trunc(num2 / num1))
                    break
            }
        } else {
            numbers.push(Number(token))
        }
    }
    return numbers.pop()
}