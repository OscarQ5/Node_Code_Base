/**
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a - an integer
 * @param {number} b - an integer
 * @returns {number} the larger number
 */
function findLarger(a, b) {
  let num = Math.max(a,b)
  return num
}

/**
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a - an integer
 * @param {number} b - an integer
 * @returns {number|string} returns the larger number of the word "tie"
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a,b) {
  if (a > b || a < b){
    return Math.max(a,b)
  } else 
    return "tie"
}

/**
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a - an integer
 * @returns {string} the words "Positive", "Negative", or "Zero"
 */
function positiveNegativeOrZero(a) {
  if (a > 0){
    return "Positive"
  } else if (a === 0){
    return "Zero"
  } else if (a < 0){
    return "Negative"
  }
}

/**
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language - a specific language
 * @returns {string} an introductory phrase
 */
function aroundTheWorldGreeting(lan) {
  if (lan === "spanish"){
    return "Hola Mundo"
  } else if (lan === "german"){
    return "Hallo Welt"
  } else 
    return "Hello World"
}

module.exports = {
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
};
