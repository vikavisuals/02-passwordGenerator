// Assigning variable to id="generate"
const $generateBtn = document.querySelector("#generate");
// Upon click, this runs writePassword function
$generateBtn.addEventListener("click", writePassword);


// Write password to the id=password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}


function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "~`!@#$%^&*()_-+={}[]";

  // Buffer variables to fill with random password elements
  let randomPassword = "";
  let randomLowerCase = "";
  let randomUpperCase = "";
  let randomNumbers = "";
  let randomSymbols = "";
  let multiRandom = "";
  let finalPassword = "";


// Makes the user input turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);
  const $lowerChecked = (document.getElementById("lowerBox").checked);
  const $upperChecked = (document.getElementById("upperBox").checked);
  const $numbersChecked = (document.getElementById("numbersBox").checked);
  const $symbolsChecked = (document.getElementById("symbolsBox").checked);


// Are both upper and lowercase checkboxes activated
  if ($lowerChecked && $upperChecked && $numbersChecked) {
    randomPassword = randomLowerCase + randomUpperCase + randomNumbers;

    for (i = 0; i < passLength; i++) {
      multiRandom += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
      finalPassword = multiRandom;
      console.log(finalPassword);
    }

// Lowercase only active
  } else if ($lowerChecked) {
    for (i = 0; i < passLength; i++) {
      randomLowerCase += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      finalPassword = randomLowerCase;
    }

// Uppercase only active
  } else if ($upperChecked) {
    for (i = 0; i < passLength; i++) {
      randomUpperCase += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      finalPassword = randomUpperCase;
    }

// Numbers only active
   } else if ($numbersChecked) {
      for (i = 0; i < passLength; i++) {
        randomNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
        finalPassword = randomNumbers;
      }

      // Symbols only active
   } else if ($symbolsChecked) {
    for (i = 0; i < passLength; i++) {
      randomSymbols += symbols.charAt(Math.floor(Math.random() * symbols.length));
      finalPassword = randomSymbols;
    }

// Lower and Upper active
  } else if ($lowerChecked && $upperChecked) {
    randomPassword = randomLowerCase + randomUpperCase;

    for (i = 0; i < passLength; i++) {
      multiRandom += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
      finalPassword = multiRandom;
    }

// Upper and numbers active
  } else if ($upperChecked && $numbersChecked) {
    randomPassword = randomUpperCase + randomNumbers;

    for (i = 0; i < passLength; i++) {
      multiRandom += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
      finalPassword = multiRandom;
    }

// Lower and numbers active
  } else if ($lowerChecked && $numbersChecked) {
    randomPassword = randomLowerCase + randomNumbers;

    for (i = 0; i < passLength; i++) {
      multiRandom += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
      finalPassword = multiRandom;
    }

  } else {
    return "No selection made";
  }


  return finalPassword;

}








// function copyToClipboard() {
//   // BONUS 
// }



// BONUS EVENT LISTENER