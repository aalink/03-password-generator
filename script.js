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
  // Run this after the user chooses the length requirement of 8 to 128
  function runTheOtherPrompts() {
    lowerChars = ""
    upperChars = ""
    numberChars = ""
    specialChars = ""

    storeAllCharsHere = "";
    // the other prompts
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
        console.log("Lowercase: " + lowerChars)
        console.log("Uppercase: " + upperChars)
        console.log("Numbers: " + numberChars)
        console.log("Special: " + specialChars)
   
      }
      
      if ((lowerChars === false) && (upperChars === false) && (numberChars === false) && (specialChars === false)) {
    console.log('-------------------------')
    console.log("ALL OF THEM ARE FALSE.")
    runTheOtherPrompts = false

  }
  function passwordLength(askPasswordLength) {
    // Variable to store the randomly selected characters
    password = "";
    randomIndex = storeAllCharsHere.length;
    // Variable to holds characters from which to randomly choose, and then store in the password variable.

    // Generate a random number. askPasswordLength parameter determines the range.
    function ranNumbers(askPasswordLength) {
      randomNumber = Math.floor(Math.random() * askPasswordLength);
      return randomNumber;
    }

    for (let step = 0; step < askPasswordLength; step++) {
      password += storeAllCharsHere.charAt(ranNumbers(randomIndex));
    }

    return password;
  }
  if (askPasswordLength === false) {
    return "Your password doesn't meet the length requirement.\nPlease choose a number that is at least 8 and no larger than 128.\nClick 'Generate Password' to try again.";
    
  } 
  else if (runTheOtherPrompts === false) {
    return "You chose a length for your password, but you selected 'Cancel' for every prompt after that.\nPlease click 'OK' to at least one of the prompts so that the password generator knows the character types you want in your password."
  }
  else {
    randomString = passwordLength(askPasswordLength);
    thisMessage = "Here is your password: \n";
    return thisMessage + randomString;
  }

}
