/**
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array - an array of values
 * @param {number|string} target - the target value
 * @returns {number} a number representing the index
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function firstIndexFound(array, target) {
  let result = -1
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      result = i
      return result
    }
  }
   return result
}

/**
 * Returns the last index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array - an array of values
 * @param {number|string} target - the target value
 * @returns {number} a number representing the index
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function lastIndexFound(array, target) {
  let result = -1
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      result = i 
    }
  }
  return result
}

/**
 * Returns the original array except with the element at the given index removed. If the index does not match up with an element, do not remove anything from the original array.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array - an array of values
 * @param {number} index - the index of the element to be removed
 * @returns {*[]} an array of values without the element at the given index
 *
 * EXAMPLE:
 *  removeElementAtIndex([ "left", "right", "left" ], 1);
 *  //> [ "left", "left" ]
 *
 *  removeElementAtIndex([ "left", "right", "left" ], 3);
 *  //> [ "left", "right", "left" ]
 */
function removeElementAtIndex(array, index) {
    if (array[index]){
      array.splice(index, 1)
      return array
    } else 
      return array
}

/**
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements - an array of numbers
 * @returns {number[]} an array of numbers multiplied by their index
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */
function timesIndex(elements) {
  let result = []
  for (let i = 0; i < elements.length; i++){
    result.push(elements[i] * i)
  }
    return result
}

module.exports = {
  firstIndexFound,
  lastIndexFound,
  removeElementAtIndex,
  timesIndex,
};
