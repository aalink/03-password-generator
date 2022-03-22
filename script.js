const everyChar = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+=-[]{}|/?><`~",
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Started when user clicks "Generate Password"
// Displays prompts to confirm the user's choices for password criteria.
// If an invalid number is chosen, the function stops and returns a message informing the user to pick a valid number.
function generatePassword(randomString) {
  askPasswordLength = prompt(
    "Choose the number of characters your password will have. NOTE: It must be at least 8 and no more than 128 characters long."
  );
  if (parseInt(askPasswordLength) >= 8 && parseInt(askPasswordLength) <= 128) {
    askPasswordLength = askPasswordLength;
  } else {
    askPasswordLength = false;
  }
  if (askPasswordLength !== false) {
    runTheOtherPrompts();
  }
  // Run this only after the user chooses the length requirement of 8 to 128
  function runTheOtherPrompts() {
    lowerChars = "";
    upperChars = "";
    numberChars = "";
    specialChars = "";
    storeAllCharsHere = "";

    // These prompts ask the user which password criteria they would like.
    // The choices will be store in storeAllCharsHere.
    // If all choices are cancelled, the function will return false and ask the user to click OK to at least one of the prompts.
    lowerChars = confirm(
      "Would you like this in your password?\nLower case letters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (lowerChars === true) {
      storeAllCharsHere += everyChar.lowercase;
      console.log(storeAllCharsHere);
    }

    upperChars = confirm(
      "Would you like this in your password?\nUpper case letters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (upperChars === true) {
      storeAllCharsHere += everyChar.uppercase;
      console.log(storeAllCharsHere);
    }

    numberChars = confirm(
      "Would you like this in your password?\nNumbers\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (numberChars === true) {
      storeAllCharsHere += everyChar.numbers;
      console.log(storeAllCharsHere);
    }

    specialChars = confirm(
      "Would you like this in your password?\nSpecial Characters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (specialChars === true) {
      storeAllCharsHere += everyChar.special;
      console.log(storeAllCharsHere);
    }
    console.log(
      "These are the characters from which the generator will randomly select: " +
        storeAllCharsHere
    );

    console.log("Lowercase: " + lowerChars);
    console.log("Uppercase: " + upperChars);
    console.log("Numbers: " + numberChars);
    console.log("Special: " + specialChars);
  }

  if (
    lowerChars === false &&
    upperChars === false &&
    numberChars === false &&
    specialChars === false
  ) {
    console.log("-------------------------");
    console.log("ALL OF THEM ARE FALSE.");
    runTheOtherPrompts = false;
  }
  // Takes the number chosen by the user as the argument.
  // Number is used in the random number generator as well as the for loop.
  function passwordLength(askPasswordLength) {
    // Variable to store the randomly selected characters
    password = "";

    // Generate a random number. askPasswordLength parameter determines the range.
    function ranNumbers(askPasswordLength) {
      randomNumber = Math.floor(Math.random() * askPasswordLength);
      return randomNumber;
    }

    // Randomly loop through the characters stored in storeAllCharsHere.
    // The number of time it is looped is based on the password length chosen by the user.
    for (let step = 0; step < askPasswordLength; step++) {
      password += storeAllCharsHere.charAt(
        ranNumbers(storeAllCharsHere.length)
      );
    }

    return password;
  }

  // Conditions that determines which message is displayed on the webpage.
  if (askPasswordLength === false) {
    return "Your password doesn't meet the length requirement.\nPlease choose a number that is at least 8 and no larger than 128.\nClick 'Generate Password' to try again.";
  } else if (runTheOtherPrompts === false) {
    return "You chose a length for your password, but you selected 'Cancel' for every prompt after that.\nPlease click 'OK' to at least one of the prompts so that the password generator knows the character types you want in your password.";
  } else {
    randomString = passwordLength(askPasswordLength);
    thisMessage = "Here is your password: \n";
    return thisMessage + randomString;
  }
}
