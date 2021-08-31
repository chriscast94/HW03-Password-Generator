var lowChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

  var upChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

  var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

  var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '?', '/', '-',];

function opts() {
  var pwLength = prompt(
    "How many characters would you like your password, pick a number between 8 and 128?"
  );
  if (Number.isNaN(pwLength)) {
    alert("Please input a number for password length.");
    return;
  }

  if (pwLength < 8) {
    alert("Too small!\nNeeds to be at least 8 characters.");
  }

  if (pwLength > 128) {
    alert("Too long!\nCan't be more than 128 characters.");
  }

  var hasSpChar = confirm(
    "Include special characters in your password?"
  );

  var hasNumbers = confirm(
    "Include Numbers in your password?"
  );

  var hasLowCase = confirm(
    "Include lower case letters?"
  );

  var hasUpCase = confirm(
    "Include capital letters in your password?"
  );

  if (!hasSpChar && !hasNumbers && !hasLowCase && !hasUpCase) {
    alert("Warning!\nMust select at least one character type!");
    return;
  }

  var options = {
    length: pwLength,
    hasSpChar: hasSpChar,
    hasNumbers: hasNumbers,
    hasLowCase: hasLowCase,
    hasUpCase: hasUpCase,
  };
  
  return options;
}
function getRandomChar(array) {
  var char =  array[Math.floor(Math.random() * array.length)];
  return char
}
function genPw() {

  var options = opts();
  var password = [];
  // var passwordSetUp = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (options.hasSpChar) {
    possibleChar = possibleChar.concat(specChar);
    guaranteedChar.push(getRandomChar(specChar));
  }

  if (options.hasNumbers) {
    possibleChar = possibleChar.concat(numChar);
    guaranteedChar.push(getRandomChar(numChar));
  }

  if (options.hasUpCase) {
    possibleChar = possibleChar.concat(upChar);
    guaranteedChar.push(getRandomChar(upChar));
  }

if (options.hasLowCase) {
  possibleChar = possibleChar.concat(lowChar);
  guaranteedChar.push(getRandomChar(lowChar));
}
console.log(guaranteedChar)
  password = password.concat(guaranteedChar); 
  console.log(password)
  for (var i = 0; i < options.length - guaranteedChar.length; i++) {
    // console.log(possibleChar)
    var result = getRandomChar(possibleChar);
    // console.log(result)
password.push(result);
    // console.log(password)
  } 
  console.log(password)
  return password.join(" ")
}
var generateBtn = document.querySelector("#gen-button");
function writePassword () {
  var password = genPw();
  var passwordText = document.querySelector("#pw-box");

  passwordText.value = password;

  console.log(password)
}
generateBtn.addEventListener("click", writePassword);
  console.log(writePassword)