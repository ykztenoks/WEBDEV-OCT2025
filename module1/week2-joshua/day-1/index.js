// this is a comment
// this
// is
// a
// multiple
// line
// comment

// **************************strings*************
const stringWithSingleQuotes = "hello";
const stringWithDoubleQuotes = "yea this is double, with a can't or Ragnar's ";
//with the backticks, its known as a template literal
const stringWithBackticks = `${stringWithSingleQuotes} world`;
// console.log(stringWithBackticks);
let age = "5";
// console.log(age * 15);
//****************boolean *************/
let isAGoodBoy = true; //or false

//*************Math Object **********/
const num1 = 1.99999998;
// console.log(Math.round(num1));
// console.log(Math.ceil(num1));
// console.log(Math.floor(num1));
// console.log(Math.random());
// console.log(Math.max(30, 66, 3339, 1));
//*****************string methods *****/
// console.log(petName.toUpperCase());

const petName = "ragnifdafadsfdas";
const capitalPetName = petName[0].toUpperCase() + petName.slice(1);
//.slice
// console.log(petName.slice(1, 5));
// console.log(petName.slice(-3));
// capitalize the first letter of the petName variable

//**************== & === */
const numberTwo = 2;
const areTheyTheSame = numberTwo.toString() === "2";

//grab a random letter from a string
const str = "This should be fun, and too easy";
const randomNumber = Math.random();
const stringLength = str.length;
const theRandomIndex = Math.floor(randomNumber * stringLength);
console.log(str[theRandomIndex]);

//The different types of naming conventions
// camelCase => thisIsAnExampleOfCamelCase
// snake_case => this_is_snake_case
// kebab-case => this-is-an-example-of-kebab-case
// PascalCase => ThisIsPascalCase
