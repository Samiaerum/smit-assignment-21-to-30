///////chapter # 21 t0 25 ///////////////

/////////question 1///////////

// Get user inputs for first and last name using prompt
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");

// Merge first and last name into a new variable titled fullName
var fullName = firstName + " " + lastName;

// Greet the user using their full name
alert("Hello, " + fullName + "!");

///////question 2//////////

// Get user input about their favorite mobile phone model using prompt
var phoneModel = prompt("Please enter your favorite mobile phone model:");

// Find the length of the user input
var inputLength = phoneModel.length
document.write("The length of your favorite mobile phone model is " + inputLength + " characters. <br><br>");

////////////question 3//////////////

var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: "+ index + "<br><br>");

///////question 4//////////////


var word = "Hello World"
var lastIndex = word.lastIndexOf("l");
document.write("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex  + "<br><br>");

//////////////question 5////////////////////

var word = "Pakistani";
var char = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + char  + "<br><br>");

////////////question 6//////////////

var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
alert("Hello, " + fullName + "! Welcome to our website.");

//////////////////question 7///////////

var word = "Hyderabad";

// Replace "Hyder" with "Islam" using replace() method
var newWord = word.replace("Hyder", "Islam");
document.write("The new word is: " + newWord + "<br><br>");

/////////////question 8///////////////

var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&" using replace() method
var newMessage = message.replace(/and/g, "&");

// Display the result in the browser
document.write("The new message is: " + newMessage + "<br><br>");

/////////////////question 9///////////

// Define the string "472"
var str = "472";

// Convert the string to a number using parseInt() function
var num = parseInt(str);

// Display the values and types in the browser
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num  + "<br><br>");

//////////////////question 10///////////////

var input = prompt("Enter some text:");
var capitalInput = input.toUpperCase();

document.write("The input in capital letters is: " + capitalInput + "<br><br>");

//////////question 11/////////////////


var input = prompt("Enter some text:");

var titleInput = input.split(" ").map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

document.write("The input in title case is: " + titleInput + "<br><br>");

////////////question 12//////////

var num = 35.36;
var numString = num.toString()
var newString = numString.replace(".", "");
document.write("The number with dot is: " + num + "<br>");
document.write("The number without dot is: " + newString + "<br><br>");
 
//////////question 13////////////

var username = prompt("Enter a username:");

// Define an array of special characters to check for
var specialChars = ["@", ".", ",", "!"];

// Initialize a boolean variable to track if the username is valid
var isValid = true;

// Loop through the specialChars array and check if the username contains any of them
for (var i = 0; i < specialChars.length; i++) {
  if (username.indexOf(specialChars[i]) !== -1) {
    // The username contains a special character
    isValid = false;
    break;
  }
}

// If the username is not valid, prompt the user to enter a new username
if (!isValid) {
  alert("Please enter a valid username");
  username = prompt("Enter a username:");
}

document.write("Your username is: " + username + "<br><br>");

///////////question 14///////////


var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemToSearch = prompt("Enter an item to search for:");
var isFound = false;
for (var i = 0; i < items.length; i++) {
  if (itemToSearch.toLowerCase() === items[i].toLowerCase()) {
    // The item is found
    isFound = true;
    break;
  }
}

// If the item is found, display a message indicating it was found. Otherwise, display a message indicating it was not found.
if (isFound) {
  alert(itemToSearch + " is found in the list!");
} else {
  alert(itemToSearch +  "is not found in the list." + "<br><br>");
}




//////////ques 15////////////////////
// Function to check if the password meets the requirements
function checkPassword(password) {
    // Check if the password contains alphabets and numbers
    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      return false;
    }
  
    var firstCharacter = password.charAt(0);
    if (!isNaN(parseInt(firstCharacter))) {
      return false;
    }
  
    if (password.length < 6) {
      return false;
    }
  
    return true;
  }
  
  var validPassword = false;
  while (!validPassword) {
    var password = prompt("Enter a password:");
  
    validPassword = checkPassword(password);
  
    if (!validPassword) {
      alert("Please enter a valid password.");
    }
  }
  
  // Inform the user that the password is valid
  alert("Password is valid.");
  

  /////////////ques 16/////////////////
  var university = "University of Karachi";

  for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>"+"<br>"+"<br>");
  }

  
////////////////ques 17///////////////
var userInput = prompt("Enter anything :");

var lastCharacter = userInput.charAt(userInput.length - 1);

alert("The last character is: " + lastCharacter);


//////////ques 18////////////
var sentence = "The quick brown fox jumps over the lazy dog";
var word = "the";
var lowerSentence = sentence.toLowerCase();
var lowerWord = word.toLowerCase()
var wordsArray = lowerSentence.split(" ");

// Count the number of occurrences of the word
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === lowerWord) {
    count++;
  }
}
document.write(sentence,"<br>");
document.write("The word 'the' occurs " + count + " times in the given sentence.");

//////////////chapter #26 t0 30//////

/////question # 1///////

// Prompt user for positive integer
let num = prompt("Enter a positive integer:");

// Convert input to number and check if it's positive
if (isNaN(num) || num <= 0) {
  document.write("Invalid input. Please enter a positive integer.");
} else {
  // Calculate round, floor, and ceil values
  let roundNum = Math.round(num);
  let floorNum = Math.floor(num);
  let ceilNum = Math.ceil(num);

  //show results in browser
  document.write("<p>Number: " + num + "</p>");
  document.write("<p>Round value: " + roundNum + "</p>");
  document.write("<p>Floor value: " + floorNum + "</p>");
  document.write("<p>Ceil value: " + ceilNum + "</p>");
}

/////question # 2///////

let num1 = parseFloat(prompt("Enter a negative floating point number:"));

document.write("<p>Number: " + num1 + "</p>");
document.write("<p>Round off value: " + Math.round(num1) + "</p>");
document.write("<p>Floor value: " + Math.floor(num1) + "</p>");
document.write("<p>Ceil value: " + Math.ceil(num1) + "</p>");


/////question # 3///////


let num2 = prompt("Enter a number:"); 
let abs = Math.abs(num2); 
alert("The absolute value of " + num2 + " is " + abs); // displays the result in an alert box


/////question # 4///////

// Simulate rolling a six-sided dice
let diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value
console.log("You rolled a " + diceValue);


/////question # 5///////

function coinToss() {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? "Heads" : "Tails";
    document.getElementById("result").innerHTML = `The coin landed on ${result}!`;
  }


/////question # 6///////


// function generateRandomNumber() {
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// document.getElementById("result").innerHTML = `Your random number is ${randomNumber}!`;
// }

///////////////////////////////////////////////////



/////question # 7 //////


// userInput = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + userInput);




/////////////////////////////////////////////////


/////question # 8///////


// userInput = prompt("Enter a number between 1 to 10");
// document.write("User enters the number " + userInput);
// secretNumber = Math.floor(Math.random() * 10) +1;
// if (userInput == secretNumber) {
//     document.write("Congratulations! You guessed the secret number!");
// } else {
//     document.write("Sorry, the secret number was " + secretNumber + " Try Again!");
// }




