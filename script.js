const everyChar = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+=-[]{}|/?><`~",
};

storeAllCharsHere = "";

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
//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  function runTheOtherPrompts() {
    // the other prompts
    lowerChars = confirm(
      "Would you like this in your password?\nLower case letters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (lowerChars === true) {
      storeAllCharsHere += everyChar.lowercase;
    } else {
      storeAllCharsHere += "";
    }

    upperChars = confirm(
      "Would you like this in your password?\nUpper case letters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (lowerChars === true) {
      storeAllCharsHere += everyChar.uppercase;
    } else {
      storeAllCharsHere += "";
    }

    numberChars = confirm(
      "Would you like this in your password?\nNumbers\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (lowerChars === true) {
      storeAllCharsHere += everyChar.numbers;
    } else {
      storeAllCharsHere += "";
    }

    specialChars = confirm(
      "Would you like this in your password?\nSpecial Characters\nSelect 'OK' to include them. Click 'Cancel' to move on to the next option."
    );
    if (lowerChars === true) {
      storeAllCharsHere += everyChar.special;
    } else {
      storeAllCharsHere += "";
    }
  }
//⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  function passwordLength(askPasswordLength) {
    // Variable to store the randomly selected characters
    password = "";
    // Variable to holds characters from which to randomly choose, and then store in the password variable.
    characterContainer =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+`~-='[]/|{}|;:";

    // alphaUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // alphaLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    // numberString = '0123456789'
    // specialCharacters = ""

    //⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
    // Generate a random number. askPasswordLength parament determines the range.
    function ranNumbers(askPasswordLength) {
      randomNumber = Math.floor(Math.random() * askPasswordLength);
      return randomNumber;
    }
    //⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

    for (let step = 0; step < askPasswordLength; step++) {
      password += characterContainer.charAt(ranNumbers(89));
    }

    return password;
  }
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  if (askPasswordLength === false) {
    return "Your password doesn't meet the length requirement.\nPlease choose a number that is at least 8 and no larger than 128.\nClick 'Generate Password' to try again.";
  } else {
    randomString = passwordLength(askPasswordLength);
    thisMessage = "Here is your password: \n";
    return thisMessage + randomString;
  }
}
