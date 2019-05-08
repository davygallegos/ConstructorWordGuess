/*  -  require dependencies ex: inquirer, axios.

    - Constructor called "Letter". 
    ** String value to store the underlying "_" character
    ** boolean value that stores whether the letter has been guess yet
    **  function that returns underlying character if the letter has been guessed,
    or a placeholder (like an underscore) if the letter has not been guessed.
    ** function that takes a character as an argument & checks it against the 
    underlying character, updating the stored boolean value to tru if it was guess
    correctly   */
// Constructor function for creating player objects
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.getChar = function () {
        if (this.guessed === false) {
            return "_"
        } else {
            return this.letter
        }
    }
    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true
            return true
        } else {
            return false
        }
    }
}

module.exports = Letter;