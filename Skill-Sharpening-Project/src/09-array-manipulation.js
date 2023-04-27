/**
 * Removes the last element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array - an array of elements
 * @returns {*[]} the last element of the array
 */
function removeElementFromEndOfArray(array) {
  let newArr = array.pop()
  return newArr
}

/**
 * Adds an `element` to the front of the inputted `array`. Then, returns the array.
 * @param {*[]} array - an array
 * @param {*} element - a value to be added
 * @returns {*[]} the original array
 */
function addElementToFrontOfArray(array, element) {
  array.unshift(element)
  return array
}

/**
 * Removes the first element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array - an array of elements
 * @returns {*[]}
 */
function removeElementFromFrontOfArray(array) {
  let newArr = array.shift()
  return newArr
}

/**
 * Returns the element in the middle of the array.
 *
 * NOTE: Inputted arrays will always be of odd length.
 *
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getMiddleElement([ 10, null, "30" ]);
 *  //> null
 */
function getMiddleElement(array) {
  let newArr = array[(array.length % 2 )]
  if (array.length < 2){
    return array.toString()
  }
  return newArr
}

module.exports = {
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
};
