/**
 * Return a non-empty string
 * @return {number} a non-empty string
 */
function returnNonEmptyString() {
  return "Pursuit"
}

/**
 * Return the length of a string
 * @param {string} str - A string
 * @return {number} integer representing the length of the string
 */
function getLengthOfString(str) {
  return str.length 
}

/**
 * Concatenate multiple strings together into one string
 * @param {string} word1 - A word
 * @param {string} word2 - A word
 * @param {string} word3 - A word
 * @return {number} a string
 */
function concatenateStrings(word1, word2, word3) {
  str = word1.concat(word2, word3)
  return str
}

/**
 * Return the letter at the given position in a string
 * @param {string} word - A word
 * @param {string} position - An index for the string
 * @return {string} the character at the given position
 */
function accessCharacterInString(word, position) {
  str = word.charAt(position)
  if (str === ""){
    return undefined
  }
  return str
}

module.exports = {
  returnNonEmptyString,
  getLengthOfString,
  concatenateStrings,
  accessCharacterInString,
};
