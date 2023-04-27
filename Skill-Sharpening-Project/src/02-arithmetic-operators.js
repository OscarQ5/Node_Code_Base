/**
 * Add two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the sum
 */
function add(a, b) {
  num = a + b
  return num
}

/**
 * Subtract two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the difference
 */
function subtract(a, b) {
  num = a - b
  return num
}

/**
 * Multiply two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the product
 */
function multiply(a, b) {
  num = a * b
  return num
}

/**
 * Divide two numbers.
 * @param {number} a - A number
 * @param {number} b - A number
 * @return {number} the quotient
 */
function divide(a, b) {
  num = a / b
  return num
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
