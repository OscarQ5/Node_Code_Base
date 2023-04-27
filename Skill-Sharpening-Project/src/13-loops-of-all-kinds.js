/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForLoop(array) {
  let result = []
  for (let i = 0; i < array.length; i++){
    result.push((array[i] + "!"))
  }
  return result
}

/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutWhileLoop(array) {
  let result = []
  let i = 0
  while (i < array.length){
    result.push((array[i] + "!"))
    i++
  }
  return result
}

/**
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array - an array of strings
 * @returns {string[]} an array of modified strings
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */
function shoutForOfLoop(array) {
  let result = []
  for (let i of array){
    result.push(i + "!")
  }
  return result
}

/**
 * Takes in an array and returns a string, joining each string with a space and adding a "!" at the very end.
 *
 * NOTE: You may NOT use the `.join()` method.
 *
 * @param {string[]} array - an array of strings
 * @returns {string} a single string
 *
 * EXAMPLE:
 *  shoutJoinLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> "A Very Happy Array!"
 */
function shoutJoinLoop(array) {
  let result = ""
  for (let i = 0; i < array.length; i++){
    result = result + array[i] + " "
  }
  result = result.substring(0, result.length - 1)
  return result + "!"
}

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  shoutJoinLoop,
};
