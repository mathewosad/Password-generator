
// Ask user for length of password
var generateBtn = document.querySelector("#generate");
// Ask user for type of password (lowercase, uppercase, numeric or special character)

const empty = "";
// 'A'-'Z' = 65-90 in ACII
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// 'a'-'z' = 97-122 in ACII
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// '0'-'9' = 48-57 in ACII
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
//ACII '33'-'47' = Special characters
const symbols = ["&","!","@","#","$","%","^","*","(",")","{","}","[","]","_","|","<",">","+","="];


// Write password to the #password input

//  Dom elements
var passLength;
var lowerCase;
var upperCase;
var wantNum;
var specialChar;
// const length = document.getElementById('length');
// const uppercase = document.getElementById('uppercase');
// const lowercase = document.getElementById('lowercase');
// const numbers = document.getElementById('numbers');
// const symbols = document.getElementById('symbols');
// const result = document.getElementById('result');
// const generate = document.getElementById('generate');

// function for user criteria password option selections
function passwordOption() {

  // prompt user for password length - need to be 8 to 128 characters
  passLength = prompt("How many characters do you want your password to be?");
  if (passLength >= 8 && passLength <= 128) {

    // password parameters, user confirmation what to choose for criteria selection
    lowerCase = confirm("Do you want to include a lowercase letter?");
    upperCase = confirm("Do you want to include a uppercase letter?");
    wantNum = confirm("Do you want to include a number?");
    specialChar = confirm("Do you want to include a special character?");

    // console log user criteria selection choices
    console.log("password length: " + passLength + "\nlowerCase: " + lowerCase + "\nupperCase: " + upperCase + "\nwantNum: " + wantNum + "\nspecialChar: " + specialChar);

    // when one of the criteria is selected, run generatePassword function
    if (lowerCase || upperCase || wantNum || specialChar) {
      generatePassword();

      // if no for all, alert that must select one type
    } else {
      alert("Please select at least one criteria to generate password!");
    }

    // alert if password length is not between 8 to 128
  } else {
    alert("Password length must be between 8 to 128!");
  }
}

// function to generate password after user criterias have been selected
function generatePassword() {
  var password = "";
  var passwordsArray = [];

  if (lowerCase == true) {
    password += lower[getRandomInt(lower.length)];
    passwordsArray = passwordsArray.concat(lower);
  }

  if (upperCase == true) {
    password += upper[getRandomInt(upper.length)];
    passwordsArray = passwordsArray.concat(upper);
  }

  if (wantNum == true) {
    password += numbers[getRandomInt(numbers.length)];
    passwordsArray = passwordsArray.concat(numbers);
  }

  if (specialChar == true) {
    var randomIndex = getRandomInt(symbols.length);
    password += symbols[randomIndex];
    passwordsArray = passwordsArray.concat(symbols);
  }

  var currentLength = password.length;
  var i;

  // console.log(password);
  // console.log(passwordsArray);

  for (i = currentLength; i < passLength; i++) {
    password += passwordsArray[getRandomInt(passwordsArray.length)];
  }

  // Write password to the #password input
  var textarea = document.getElementById('password');
  textarea.value = password;
}

// function to generate random selection from the arrays
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// function to run everything when generate password button is clicked
function writePassword() {
  passwordOption();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);