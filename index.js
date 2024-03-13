function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
    console.log(n = ++(n))
    return n
}

function decrement(n) {
    console.log(n = --(n))
    return n
}

function makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}
