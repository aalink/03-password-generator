//✅
const everyChar = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+=-[]{}|/?><`~",
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
  randomizeThese = stringToRandomize
  for (let step = 0; step < randomizeThese.length; step++)
    stringDone += randomizeThese.charAt(ranNumbers(randomizeThese.length));

    // console.log("This is stringDone: " + stringDone)
    return stringDone; 
}

//✅ Uses true/false boolean to record the user's choice of character types.
//It only takes 1 of each chosen character type and stores it in everyChar.password
function usersChoices(upper, lower, numbers, special) {
  if (upper === true) {
    upperRandom = randomizeAnyString(everyChar.uppercase)
    everyChar.password += upperRandom.charAt(0)
    // console.log(everyChar.password)
  }
  if (lower === true) {
    lowerRandom = randomizeAnyString(everyChar.lowercase)
    everyChar.password += lowerRandom.charAt(0)
    // console.log(everyChar.password)
  }
  if (numbers === true) {
    numberRandom = randomizeAnyString(everyChar.numbers)
    everyChar.password += numberRandom.charAt(0)
    // console.log(everyChar.password)
  }
  if (special === true) {
    specialRandom = randomizeAnyString(everyChar.special)
    everyChar.password += specialRandom.charAt(0)
    // console.log(everyChar.password)
  }
  
  return everyChar.password
    // console.log(randomizeAnyString(everyChar.password))
}

x = usersChoices(true, true, true, true)
console.log(x)
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
//⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆

function chosenPasswordLength(passwordLengthChosen) {
   numberOfChars = passwordLengthChosen
   console.log(numberOfChars)
   numberAlreadyInPassword = everyChar.password.length
   console.log(numberAlreadyInPassword)
   console.log(numberOfChars - numberAlreadyInPassword)
}





chosenPasswordLength(20)