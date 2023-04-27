/**
 * A function that returns true if the argument is false, false if the argument is true
 * @param {boolean} value - a boolean
 * @return {boolean} the opposite value
 */
function flipBoolean(value) {
  return !value
}

/**
 * Return the boolean value of any value
 * @param {*} value - a value
 * @return {boolean}  - a boolean based on the value's truthiness or falsiness
 */
function returnBooleanValue(value) {
  if (value === false){
    return value
  }
  return !!value
}

/**
 * Check if two values are strictly equal to each other
 * @param {*} value1 - any value
 * @param {*} value2 - any value
 * @return {boolean}  a true or false value based on whether the two inputs are strictly equal to each other
 */
function checkStrictEquality(value1, value2) {
  val = value1 === value2
  return val
}

/**
 * Returns `true` if the value given is a falsy value. Otherwise, returns `false`.
 * @param {*} val
 * @returns {boolean}
 */
function isFalsy(val) {
  if (val === true){
    return !!val
  }
  return !val
}

module.exports = {
  flipBoolean,
  returnBooleanValue,
  checkStrictEquality,
  isFalsy,
};
