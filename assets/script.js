
// Assignment code here
var generateBtn = document.querySelector("#generate");
var numbers= "1234567890";
var upperCaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars= "abcdefghijklmopqrstuvwxyz";
var specialChars= "!@#$%^&*()_+-=[];',./?><|:`~}{"


function randomizer(text, numbers = 1) {
  let randomString = "";

  for (let i = 0; i < numbers; i++) {
    randomString += text.charAt(Math.floor(Math.random() * text.length));
  }

  return randomString;
}

function generatePassword() { 
  let IncludeChars = "";
  var passwordGenerated= "";  

  let passwordLength = parseInt(
    prompt("Indicate length of password. Must be a minimum of 8 characters and a maximum of 128 characters")
  );

  if (isNaN(passwordLength)|| passwordLength <8 || passwordLength>128){
    alert ("Number entered is not within required range for password length");
    return "";
  }

  includeNumberChars= confirm ("Confirm to include numbers in generated password"
  );  
  includeUpperCaseChars= confirm ("Confirm to include upper case characters in generated password"
  ); 
  includeLowerCaseChars= confirm ("Confirm to include lower case characters in generated password"
  ); 
  includeSpecialChars= confirm ("Confirm to include special characters in generated password"
  );

  if (includeNumberChars ) {
    IncludeChars += numbers;
    passwordGenerated += randomizer(numbers);
  }
  if (includeUpperCaseChars ) {
    IncludeChars += upperCaseChars;
    passwordGenerated += randomizer(upperCaseChars);
  } 
   if (includeLowerCaseChars) {
    IncludeChars += lowerCaseChars;
    passwordGenerated += randomizer(lowerCaseChars);
  }
  if (includeSpecialChars) {
    IncludeChars += specialChars;
    passwordGenerated += randomizer(specialChars);
  }
  passwordGenerated += randomizer(
    IncludeChars, passwordLength - passwordGenerated.length
  );
  passwordGenerated = randomizer(
    passwordGenerated, passwordGenerated.length);

  return passwordGenerated;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
