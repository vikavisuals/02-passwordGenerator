// Assignment Code
var generateBtn = document.querySelector("#generate"); //Grabbing everything with the Generate ID


// Write password to the #password input
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

  const userAmount = parseInt(document.getElementById("userAmountBox").value);

    if (document.getElementById("lowerCaseBox").checked) {
      for (i = 0; i < userAmount; i++) {
        let randomNum = Math.floor(Math.random() * lowerCase.length);
        console.log (lowerCase[randomNum]);
      }
    } else {
      console.log("not checked");
    }
  
    if (document.getElementById("upperCaseBox").checked) {
      for (i = 0; i < userAmount; i++) {
        let randomNum = Math.floor(Math.random() * upperCase.length);
        console.log (upperCase[randomNum]);
      }
    } else {
      console.log("not checked");
    }

}



function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
