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

//✅Finds the number of characters in everyChar.primaryString and then subtracts it from passwordLengthChosen. The number that is returned will be used to generate everyChar.secondaryString
function chosenPasswordLength(passwordLengthChosen) {
  numberOfChars = passwordLengthChosen;
  //  console.log("The user wants this many: " + numberOfChars)
  numberAlreadyInPassword = everyChar.password.length;
  //  console.log("The password already contains this many: " + numberAlreadyInPassword)
  //  console.log(numberOfChars - numberAlreadyInPassword)
  //  console.log("Primary string has this many characters: " + everyChar.primaryString.length)
  //  console.log("Secondary string has this many characters: " + everyChar.secondaryString.length)
  //  console.log("The password needs this many more characters: " + (numberOfChars - everyChar.primaryString.length))

  return numberOfChars - everyChar.primaryString.length;
}

//✅ Uses true/false boolean to record the user's choice of character types.
//It only takes 1 of each chosen character type and stores it in everyChar.password
function userChoicesStringTwo(upper, lower, numbers, special) {
  if (upper === true) {
    upperRandom = randomizeAnyString(everyChar.uppercase);
    everyChar.secondaryString += upperRandom;
    // console.log(everyChar.secondaryString)
  }
  if (lower === true) {
    lowerRandom = randomizeAnyString(everyChar.lowercase);
    everyChar.secondaryString += lowerRandom;
    // console.log(everyChar.secondaryString)
  }
  if (numbers === true) {
    numberRandom = randomizeAnyString(everyChar.numbers);
    everyChar.secondaryString += numberRandom;
    // console.log(everyChar.secondaryString)
  }
  if (special === true) {
    specialRandom = randomizeAnyString(everyChar.special);
    everyChar.secondaryString += specialRandom;
    // console.log(everyChar.secondaryString)
  }

  return everyChar.secondaryString;
  // console.log(randomizeAnyString(everyChar.secondaryString))
}


//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆

primary = userChoicesStringOne(true, true, true, true);
secondary = userChoicesStringTwo(true, true, true, true);

// console.log(userChoicesStringTwo(true,true,true,true))

console.log(chosenPasswordLength(20));

// console.log(primary);

// console.log(secondary);

console.log(primary + secondary);


// chosenPasswordLength(20)
