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
  
  let randomPassword = "";
  let randomLowerCase = "";
  let randomUpperCase = "";
  let multiRandom = "";
  let finalPassword = "";


  // Makes the user input turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);
  const $lowerChecked = (document.getElementById("lowerBox").checked);
  const $upperChecked = (document.getElementById("upperBox").checked);

  // Is lowercase checkbox activated
  if ($lowerChecked) {
    for (i = 0; i < passLength; i++) {
      randomLowerCase += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      finalPassword = randomLowerCase;
    }
  } else {
    console.log("not checked");
  }

  // Is uppercase checkbox activated
  if ($upperChecked) {
    for (i = 0; i < passLength; i++) {
      randomUpperCase += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      finalPassword = randomUpperCase;
    }
  } else {
    console.log("not checked");
  }

  // Are both upper and lowercase checkboxes activated
  if (($lowerChecked) && ($upperChecked)) {
    randomPassword = randomLowerCase + randomUpperCase;
    for (i = 0; i < passLength; i++) {
      multiRandom += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
      finalPassword = multiRandom;
    }
  } else {
    console.log("Both are not checked");
  }



  // console.log(randomPassword);
  console.log(finalPassword);
  return finalPassword;

}








// function copyToClipboard() {
//   // BONUS 
// }



// BONUS EVENT LISTENER
