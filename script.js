
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
  
  let charNumber = prompt("Choose the number of characters your password will have. NOTE: It must be at least 8 and no more than 128 characters long.");
  if (parseInt(charNumber) > 7 && parseInt(charNumber) < 129) {
    prompt("GOOD")
  } else {
    prompt("TRY AGAIN: Make sure it is at least 8 and no more than 128 characters long.")
  }

  // let lowerChars = prompt("Would you like lower case letters? Type 'Yes' or 'No'");
  // let upperChars = prompt("Would you like upper case letters? Type 'Yes' or 'No'");
  // let numberChars = prompt("Would you like numbers? Type 'Yes' or 'No'");
  // let specialChars = prompt("Would you like special characters? Type 'Yes' or 'No'");

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
function passwordLength(range) {

  // Variable to store the randomly selected characters
  password = "";
  // Variable to holds characters from which to randomly choose, and then store in the password variable.
  characterContainer =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+`~-='[]/|{}|;:";
  
    // alphaUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // alphaLowerCase = 'abcdefghijklmnopqrstuvwxyz'
    // numberString = '0123456789'
    // specialCharacters = ""
  
  // Function to choose the range of numbers you'd like to retrieve from.
  // !!! IMPORTANT: This range includes 0 which will be useful for accessing an index. !!!
  // So if you use ranNumbers(50), it will generate a random number from 0 to 49
  function ranNumbers(range) {
    randomNumber = Math.floor(Math.random() * range);
    return randomNumber;
  }
  
  for (let step = 0; step < range; step++) {
    password += characterContainer.charAt(ranNumbers(89));
  }
  
  // console.log(password);
  
  return password
    
  }
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 



  randomString = passwordLength(30)
  thisMessage = 'Here is your password: '
  return thisMessage + randomString
}


