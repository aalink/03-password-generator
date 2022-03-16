// Variable to store the randomly selected characters
password =''
// Variable to holds characters from which to randomly choose, and then store in the password variable.
characterContainer = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_+`~-='[]/|{}|;:"

// Function to choose the range of numbers you'd like to retrieve from.
// !!! IMPORTANT: This range includes 0 which will be useful for accessing an index. !!!
// So if you use ranNumbers(50), it will generate a random number from 0 to 49
function ranNumbers(range) {
  randomNumber = Math.floor(Math.random() * range);
  return randomNumber;
}


for (let step = 0; step < 10; step++) {
  password += characterContainer.charAt(ranNumbers(89));
}

console.log(password)