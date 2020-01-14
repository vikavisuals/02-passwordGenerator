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

  // Makes the user input turn into a number, versus a string
  const passLength = parseInt(document.getElementById("passLength").value);
  const $lowerChecked = (document.getElementById("lowerBox").checked);
  const $upperChecked = (document.getElementById("upperBox").checked);

  // Is lowercase checkbox activated
  if ($lowerChecked) {
    for (i = 0; i < passLength; i++) {
      randomLowerCase += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      // lowerCase.length is a number of 26
    }
  } else {
    console.log("not checked");
  }

  // Is uppercase checkbox activated
  if ($upperChecked) {
    for (i = 0; i < passLength; i++) {
      randomUpperCase += upperCase.charAt(Math.floor(Math.random() * upperCase.length));

    }
  } else {
    console.log("not checked");
 }

 // Are both upper and lowercase checkboxes activated
 if (($lowerChecked) && ($upperChecked)) {
   randomPassword = randomLowerCase + randomUpperCase;
 } else {
   console.log("Both are not checked");
 }


//  console.log(randomUpperCase);
//  console.log(randomLowerCase);
 console.log (randomPassword);
 
}








// function copyToClipboard() {
//   // BONUS 
// }



// BONUS EVENT LISTENER


// query or getelement works here, it's preference
// const $shorterPassword = document.getElementById("shorterPassword");
// const $longerPassword = document.getElementById("longerPassword");
// const $passLength = parseInt(document.getElementById("passLength").value);

// let passLength = 10;

// $longerPassword.addEventListener("click", function () {
//   if (passLength < 128) {
//     passLength++;
//         $passLength.value = passLength;
//     } else {  
//         $passLength.value = passLength;
//     }
// });

// $shorterPassword.addEventListener("click", function () {
//   if (passLength < 9) {
//       $passLength.value = passLength;
//   } else {
//       passLength--;
//       $passLength.value = passLength;
//   }
//   console.log(passLength);
// });