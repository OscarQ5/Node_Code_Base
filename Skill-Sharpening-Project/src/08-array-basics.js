/**
 * Creates and returns an array where the first element is `a` and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]} an array of two elements
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a, b) {
  let result = [a, b]
  return result
}

/**
 * Returns the length of the array
 * @param {*[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  getArrayLength([ 10, 20, 30 ]);
 *  //> 3
 */
function getArrayLength(array) {
  let newArr = []
  newArr = array.length
  return newArr
}

/**
 * Returns the first element of the array.
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {
  let newArr = array.shift()
  return newArr
  
}

/**
 * Returns the last element of the array.
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {
  let newArr = array.pop()
  return newArr
}

module.exports = {
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
};
