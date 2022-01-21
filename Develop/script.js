// Assignment Code
// Ask user for length of password
// Ask user for type of password (lowercase, uppercase, numeric or special character)
// 'a'-'z' = 97-122 in ACII
// 'A'-'Z' = 65-90 in ACII
// '0'-'9' = 48-57 in ACII
// '33'-'47' = Special characters

const empty = "";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "&!@#$%^*(){}[]_|<>+="


// Write password to the #password input

//  Dom elements

const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const result = document.getElementById('result');
const generate = document.getElementById('generate');

// Generator Functions
// Add event listener to generate button
generate.addEventListener("click", () => {
  let initialPassword = "";
  (uppercase.checked) ? initialPassword += uppercase : "";
  (lowercase.checked) ? initialPassword += lowercase : "";
  (number.checked) ? initialPassword += number : "";
  (symbol.checked) ? initialPassword += symbol : "";

});

// Generate a random number that represents all possible characters in our password
function generatePassword(l, initialPassword) {
  let pass = "";
  // Added for loop
  for (let i = 0; i < l; i++){
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  console.log(pass);
  return pass;
  
}




// Ask user for length of password
// Ask user for type of password (lowercase, uppercase, numeric or special character)

// 'a'-'z' = 97-122 in ACII
// 'A'-'Z' = 65-90 in ACII
// '0'-'9' = 48-57 in ACII
// '33'-'47' = Special characters


// 10 posible digits + 26 possible uppercase letters + 26 possible lowercase letters = 62 possible characters
