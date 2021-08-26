  //specialcharacters
  // numbers
  //Uppercase characters
  //lowercase characters


var lowChar = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',

  ];

  var upChar = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

  ];

  var numChar = [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
  ];

  var specChar = [
      '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '/', '-',

  ];
  ​
//   8-128
var length = function charLength(

    );


  ​
  // prompt How many characters would you like your password to contain
  // Can't have less than 8 or more than 128
  // If the characters are less than 8 or more than 128, you need to start all over
  // var hasSpecialCharacters  prompt, do you want special characters
  // prompt, do you want numbers
  ​
  if(!specChar && !numChar && !lowChar && !upChar){
    alert("Password must have at least one of each character type");
    return;
  }
  ​
  ​password.concat(guranteeCharacters);
  var options = getOptions {
    //   Dictate length of the passsword 8-128 characters
    length: length,
    specChar: specChar,
    numChar: numChar,
    lowChar: lowChar,
    upChar: upChar,
    // has numbers
    //has lowercase
    //has upercase
  }
  ​
  function getRandomChar(array){
    return array[Math.floor(Math.random *array.length)]
  }
  ​
  function generatePassword(){
    // Password must contain at least one of each: special character; number; upper and lower case letter
        // You need an array for the final password 
        // you need an array for the guarantee characters 
        // you need an array for the possible characters /
  ​
    // For every character type selected, you need to concat the existing character arrays into the possible characters array.


    if(options.hasSpecialCharacters){
      possibleCharacters = possibleCharacters.concat(specialcharacters);
      password.push(getRandomChar(specialcharacters))
    }
   for(var i = 0; i < options.length; i++){
     var characterResult = getRandomChar(possibleCharacters);
     password.push(characterResult)
   }
   //Array method that will merge all the elements of an array. it is join!
  }
  ​
  ​
  ​
  ​
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  ​
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  ​
    passwordText.value = password;
  ​
  }
  ​
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);