/**
 * Return an integer
 * @return {number} an integer
 */
function returnPositiveInteger() {
  return Math.abs(-5)
}

/**
 * Return a negative numbers
 * @return {number} a negative numbers
 */
function returnNegativeInteger() {
  return -Math.abs(5)
}

/**
 * Return a decimal number
 * @return {number} a decimal number
 */
function returnDecimalNumber() {
  return Math.floor()
}

/**
 * Perform a calculation and return the value `NaN`.
 * @return {NaN} the `NaN` value.
 */
function calculateNaN() {
  return Number("math")
}

module.exports = {
  returnPositiveInteger,
  returnNegativeInteger,
  returnDecimalNumber,
  calculateNaN,
};
