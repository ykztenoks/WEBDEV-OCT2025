/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";
const theLetterJIndex = string1.indexOf("j");
// turn string into an array
const arrayOfWords = string1.split(" ");
console.log(theLetterJIndex);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";
const ourVariable = string2[2] + string2[11] + string2[11] + string2[10];
console.log(ourVariable);
// Your code here...

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
const letsGo = string3.repeat(4) + " " + "Batman!";
const letsGoWithTemplateLiterals = `${string3.repeat(4)} Batman!`;
console.log(letsGo);

/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruits =
  "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";
const indexOfWatermelon = fruits.indexOf("watermelon");
const myFavFruit = fruits.slice(37, 48);
console.log(myFavFruit, indexOfWatermelon);
/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

// Check the first headline
if (funnyHeadline1.includes("oxygen")) {
  console.log("the funny headline 1 does have the word oxygen in it");
}
// Check the second headline
if (funnyHeadline2.includes("oxygen")) {
  console.log("the second headline does have the word oxygen");
} else {
  console.log("the second headline does not have the word oxygen");
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9wRangiiiiffadfasdfL";

// a) Print the string length
console.log(string4.length);

// b) Print the last character in the string
console.log(string4[string4.length - 1]);
