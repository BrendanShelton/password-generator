// Assignment code here

function generatePassword() {
  //variables for password criteria
  var length;
  var includeSpecialCharacters;
  var includeUppercase;
  var includeLowercase;
  var includeNumber;

  length = window.prompt("Enter a password length of 8 or more or 128 or less", "enter number")
  while (length < 8 || length > 128) {
  length = window.prompt("The password length cannot be less than 8 characters or more than 128", "enter number")
  }

  //prompts user for input and tests whether input has been received
  var criterionChosen = false
  while (!criterionChosen) {
    
    if (includeSpecialCharacters = window.confirm("select 'OK' if if the password needs to include special characters.")) {
      length -= 1;
    }
    if (includeUppercase = window.confirm("select 'OK' if if the password needs to include uppercase letters.")) {
      length -= 1;
    }
    if (includeLowercase = window.confirm("select 'OK' if if the password needs to include lowercase letters.")) {
      length -= 1;
    }
    if (includeNumber = window.confirm("select 'OK' if if the password needs to include numbers.")) {
      length -= 1;
    }
    
    if (includeSpecialCharacters || includeUppercase || includeLowercase || includeNumber) {
      criterionChosen = true
    }
    else {
      window.alert("Please choose which characters to include in the password")
    }
    
  }
  
  //list of characters from which the 
  var characters = ''
  //characters which will be added to the list depending on criteria chosen
  var lowercaseList ='abcdefghijklmnopqrstuvwxyz';
  var uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numberList ='0123456789'
  var specialCharactersList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  //the randomly generated password
  var randomString = '';

  //adds each chosen character type to the list of characters and adds one character of each chosen type to the password
  if (includeSpecialCharacters) {
    characters += specialCharactersList;
    randomString += specialCharactersList.charAt(Math.floor(Math.random() * specialCharactersList.length));
    console.log(randomString);
  }
  if (includeUppercase) {
    characters += uppercaseList;
    randomString += uppercaseList.charAt(Math.floor(Math.random() * uppercaseList.length));
    console.log(randomString);
  }
  if (includeLowercase) {
    characters += lowercaseList;
    randomString += lowercaseList.charAt(Math.floor(Math.random() * lowercaseList.length));
    console.log(randomString);
  }
  if (includeNumber) {
    characters += numberList;
    randomString += numberList.charAt(Math.floor(Math.random() * numberList.length));
    console.log(randomString);
  }
  
  //randomly generates the remaining length of the password
  const charactersLength = characters.length;  
  for (var i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return randomString
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  return 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
