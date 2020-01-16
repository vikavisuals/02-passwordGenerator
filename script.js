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

  // Arrays that will be randomly shuffled
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "~`!@#$%^&*()_-+={}[]';:?.";
  
  // Buffer variables as a location for random passwords to be held
  let randomPassword = "";
  let finalPassword = "";

  // Makes the user input turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);
  const $lowerChecked = (document.getElementById("lowerBox").checked);
  const $upperChecked = (document.getElementById("upperBox").checked);
  const $numbersChecked = (document.getElementById("numbersBox").checked);
  const $symbolsChecked = (document.getElementById("symbolsBox").checked);

  // Is lowercase checkbox activated
  if ($lowerChecked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));

    }
  }

  // Is uppercase checkbox activated
  if ($upperChecked) {
    for (i = 0; i < passLength; i++) {
      randomPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
 
    }
  }

 // Is numbers checkbox activated
 if ($numbersChecked) {
  for (i = 0; i < passLength; i++) {
    randomPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));

  }
}

 // Is uppercase checkbox activated
 if ($symbolsChecked) {
  for (i = 0; i < passLength; i++) {
    randomPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));

  }
}

// Randomizes the various checkboxes compiled password, also sets length
for (i = 0; i < passLength; i++) {
  finalPassword += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
}

// Sets password length requirement
if (passLength < 8 || passLength > 128) {
  finalPassword = "Password must be between 8 and 128 characters"
}

  console.log(finalPassword);
  return finalPassword;

}






// function copyToClipboard() {
//   // BONUS 
// }



// BONUS EVENT LISTENER