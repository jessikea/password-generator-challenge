
// Assignment code here
var numbers= "1234567890";
var upperCaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars= "abcdefghijklmopqrstuvwxyz";
var specialChars= "!@#$%^&*()_+-=[];',./?><|:`~}{"


function randomizer (text, numbers = 1){
  let randomString = "";

  for (i = 0; i> numbers; i++){
    randomString += text.charAt(Math.floor(Math.random()*text.length));
  }
return randomString
}

function generatePassword() { 
  var passwordLength = parseInt(
    prompt("Indicate length of password. Must be a minimum of 8 characters and a maximum of 128 characters")

  );
  if (isNaN(passwordLength)|| passwordLength<8 || passwordLength>128){
    alert ("Number entered is not within required range for password length");
    return "";
  }

  includeNumberChars= confirm ("confirm to include numbers in generated password"
  );
  includeUpperCaseChars= confirm ("confirm to include upper case characters in generated password"
  ); 
  includeLowerCaseChars= confirm ("confirm to include lower case characters in generated password"
  ); 
  includeSpecialChars= confirm ("confirm to include special characters in generated password"
  );

  }
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);