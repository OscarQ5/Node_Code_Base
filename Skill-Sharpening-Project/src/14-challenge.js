/**
 * Loop over a string and return an array of all vowels (excluding "y") used in the string.
 *
 * @param {string} text - a list of characters
 * @returns {string[]} an array of all vowels
 *
 * EXAMPLE:
 *  filterVowels("a very happy string");
 *  //> ["a", "e", "a", "i"]
 *
 * EXAMPLE:
 *  filterVowels("MNSTR");
 *  //> []
 */
function filterVowels(text) {
  let result = []
  let vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < text.length; i++){
    if (vowels.includes(text[i])){
    result.push(text[i]) 
    } 
  }
  return result
}

/**
 * Checks whether or not the sum of all numbers in two arrays is equal.
 *
 * @param {number[]} array1 - an array of numbers
 * @param {number[]} array2 - an array of numbers
 * @returns {boolean} whether or not the sum of both array values is the same
 *
 * EXAMPLE:
 *  arraysWithSameSum([0,1,3], [1,1,1,1]);
 *  //> true
 *
 * EXAMPLE:
 *  arraysWithSameSum([0,1,3], [4,3,2,1]);
 *  //> false
 */
function arraysWithSameSum(array1, array2) {
  let sum = 0
  let sum2 = 0
  for (let i = 0; i < array1.length; i++){
    sum += array1[i]
  }
  for (let i = 0; i < array2.length; i++){
    sum2 += array2[i]
  }
  if (sum === sum2){
    return true
  } else 
    return false
}

/**
 * Checks whether the directions are the same in two arrays
 *
 * @param {string[]} array1 - an array of directions
 * @param {string[]} array2 - an array of directions
 * @returns {boolean} whether or not the directions are the same in each array
 *
 * EXAMPLE:
 *  arraysWithSameDirections(["left", "right", "up"], ["left", "right", "up"]);
 *  //> true
 *
 * EXAMPLE:
 *  arraysWithSameDirections(["left", "right", "up"], ["left", "right", "up", "up"]);
 *  //> false
 */
function arraysWithSameDirections(array1, array2) {
  let index = []
  let index2 = []
  for (let i = 0; i < array1.length; i++){
    index += array1[i]
  }
  for (let i = 0; i < array2.length; i++){
      index2 += array2[i]
    } 
  if (index === index2){
      return true
    } 
  return false
}

/**
 * Creates a new array where the values of `array1` and `array2` are interwoven, with the values from `array1` coming first. If there are no more values to weave, only the values from the remaining array are added.
 *
 * @param {string[]} array1 - an array of truthy strings
 * @param {string[]} array2 - an array of truthy strings
 * @returns {string[]} an array with all combined values interwoven
 *
 * EXAMPLE:
 *  interweave(["a", "b", "c"], ["d", "e", "f"]);
 *  //> ["a", "d", "b", "e", "c", "f"]
 *
 * EXAMPLE:
 *  interweave(["a", "b", "c", "d"], ["e"]);
 *  //> ["a", "e", "b", "c", "d"]
 *
 * EXAMPLE:
 *  interweave(["a"], ["b", "c", "d"]);
 *  //> ["a", "b", "c", "d"]
 */
function interweave(array1, array2) {
  let result = []
  while (array1.length || array2.length){
    if (array1[0]){
      result.push(array1.shift())
    } 
    if (array2[0]){
      result.push(array2.shift())
    }
  } return result
}

module.exports = {
  filterVowels,
  arraysWithSameSum,
  arraysWithSameDirections,
  interweave,
};
