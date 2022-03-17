const everyChar = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!@#$%^&*()_+=-[]{}|/?><`~",
  password: "",
};
//✅
function ranNumbers(range) {
  randomNumber = Math.floor(Math.random() * range);
  return randomNumber;
} //✅

console.log(ranNumbers(everyChar.numbers.length));

function pwGen(range) {
  for (let step = 0; step < range; step++) {
    everyChar.password += everyChar.lowercase.charAt(ranNumbers(range));
  }

  return everyChar.password;
}

// console.log(pwGen(6));
