// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '?'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const confirmLength = "";
let confirmNumbers;
let confirmSpecialCharacters;
let confirmLowerCase;
let confirmUpperCase;


function generatePassword() {
  const confirmLength = (prompt("How many characters would you like your password to contain?"));

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Your password must contain 8-128 characters. Try Again!");
    const confirmLength = prompt(`Your password will have ${confirmLength} characters`);
  }

  const confirmNumbers = confirm("Click OK if you want to include numbers in your password.");
  const confirmSpecialCharacters = confirm("Click OK if you want to include special characters in your password.");
  const confirmLowerCase = confirm("Click OK if you want to include lower case letters in your password.");
  const confirmUpperCase = confirm("Click OK if you want to include upper case letters in your password.");

  while (confirmNumbers === false && confirmSpecialCharacters === false && confirmLowerCase === false && confirmUpperCase === false) {
    alert("You must include numbers, special characters, lower case letters, upper case letters in your password.");
    const confirmNumbers = confirm("Click OK if you want to include numbers in your password.");
    const confirmSpecialCharacters = confirm("Click OK if you want to include special characters in your password.");
    const confirmLowerCase = confirm("Click OK if you want to include lower case letters in your password.");
    const confirmUpperCase = confirm("Click OK if you want to include upper case letters in your password.");
  }


  let createPassword = []

  if (confirmNumbers) {
    createPassword = createPassword.concat(numbers)
  }

  if (confirmSpecialCharacters) {
    createPassword = createPassword.concat(specialCharacters)
  }

  if (confirmLowerCase) {
    createPassword = createPassword.concat(lowerCase)
  }

  if (confirmUpperCase) {
    createPassword = createPassword.concat(upperCase)
  }

  console.log(createPassword)

  let randomPassword = ""

  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + createPassword[Math.floor(Math.random() * createPassword.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById('generate').addEventListener("click", writePassword);