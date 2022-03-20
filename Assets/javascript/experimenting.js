//✅
const everyChar = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+=-[]{}|/?><`~",
  primaryString: "",
  secondaryString: "",
  password: "",
};

//✅ Make random number based on range parameter
function ranNumbers(range) {
  randomNumber = Math.floor(Math.random() * range);
  return randomNumber;
}

//✅ Function that will randomize any string
function randomizeAnyString(stringToRandomize) {
  stringDone = "";
  randomizeThese = stringToRandomize;
  for (let step = 0; step < randomizeThese.length; step++)
    stringDone += randomizeThese.charAt(ranNumbers(randomizeThese.length));

  // console.log("This is stringDone: " + stringDone)
  return stringDone;
}

//✅ Uses true/false boolean to record the user's choice of character types.
//It only takes 1 of each chosen character type and stores it in everyChar.primaryString
function userChoicesStringOne(upper, lower, numbers, special) {
  if (upper === true) {
    upperRandom = randomizeAnyString(everyChar.uppercase);
    everyChar.primaryString += upperRandom.charAt(0);
    // console.log(everyChar.primaryString)
  }
  if (lower === true) {
    lowerRandom = randomizeAnyString(everyChar.lowercase);
    everyChar.primaryString += lowerRandom.charAt(0);
    // console.log(everyChar.primaryString)
  }
  if (numbers === true) {
    numberRandom = randomizeAnyString(everyChar.numbers);
    everyChar.primaryString += numberRandom.charAt(0);
    // console.log(everyChar.primaryString)
  }
  if (special === true) {
    specialRandom = randomizeAnyString(everyChar.special);
    everyChar.primaryString += specialRandom.charAt(0);
    // console.log(everyChar.primaryString)
  }

  return everyChar.primaryString;
  // console.log(randomizeAnyString(everyChar.primaryString))
}

//✅ Uses true/false boolean to record the user's choice of character types.
//It only takes 1 of each chosen character type and stores it in everyChar.password
function userChoicesStringTwo(upper, lower, numbers, special) {
  if (upper === true) {
    // upperRandom = randomizeAnyString(everyChar.uppercase);
    everyChar.secondaryString += everyChar.uppercase;
    // console.log(everyChar.secondaryString)
  }
  if (lower === true) {
    // lowerRandom = randomizeAnyString(everyChar.lowercase);
    everyChar.secondaryString += everyChar.lowercase;
    // console.log(everyChar.secondaryString)
  }
  if (numbers === true) {
    // numberRandom = randomizeAnyString(everyChar.numbers);
    everyChar.secondaryString += everyChar.numbers;
    // console.log(everyChar.secondaryString)
  }
  if (special === true) {
    // specialRandom = randomizeAnyString(everyChar.special);
    everyChar.secondaryString += everyChar.special;
    // console.log(everyChar.secondaryString)
  }

  return randomizeAnyString(everyChar.secondaryString);
  // console.log(randomizeAnyString(everyChar.secondaryString))
}


//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//✅Final function that takes 5 parameters: The number of characters in the password, and then true/false booleans the determine what types are permitted.
function finalPassword(finalNumber,upperbool,lowerbool,numberbool,specialbool) {
  
  everyChar.primaryString = userChoicesStringOne(upperbool, lowerbool, numberbool, specialbool);
  
  everyChar.secondaryString = userChoicesStringTwo(upperbool, lowerbool, numberbool, specialbool);

  everyChar.password += everyChar.primaryString
  
  for (let step = 0; step < finalNumber - everyChar.primaryString.length; step++) {
    everyChar.password += everyChar.secondaryString.charAt(ranNumbers(everyChar.secondaryString.length));
  }
  return everyChar.password;
}

console.log(finalPassword(1000, true, true, true, true));