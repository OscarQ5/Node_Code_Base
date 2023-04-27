/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min - a number above 0
 * @param {number} max - a number greater than `min`
 * @returns {number} sum of all numbers between and including `min` and `max`
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {
  let sum = 0
  for (let i = min; i <= max; i++){
    sum += i;
  } return sum
}

/**
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min - a number greater than 0
 * @param {number} max - a number greater than `min`
 * @returns {number[]} - an array of numbers
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  let num = []
  for (let i = min; i <= max; i++){
    if (i % 2 === 1){
      num.unshift(i)
    }
  }return num
}

/**
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min - a number greater than 0
 * @param {number} max - a number greater than `min`
 * @returns {number[]} - an array of numbers
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  let num = []
  for (let i = min; i <= max; i += 2){
    num.push(i)
    } 
  return num
}

/**
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array - an array of numbers
 * @returns {number[]} - a new array
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
  let x = 0
  let sum = []
  for (let i = 0; i < array.length; i++){
    x = array[i] + x
    sum.push(x)
  }
  return sum
}

module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  cumulativeSum,
};
