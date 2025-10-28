// Iteration 1: Names and Input
const hacker1 = "daniel"
console.log("The driver's name is:", hacker1)

const hacker2 = "josh"
console.log("The navigator's name is:", hacker2)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  )
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  )
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

// Iteration 3: Loops

let result = ""
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " "
}

console.log(result)

let nameReverse = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameReverse += hacker2[i]
}
console.log(nameReverse)

// const reversedJoshAdvanced = hacker2.split("").reverse().join("")

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque sapien lorem, et porta lectus auctor et. Nam tempor dui dolor, at rutrum odio pharetra at. Nulla diam dolor, placerat sed ullamcorper eget, facilisis quis nunc. Vivamus lobortis fermentum eros, in ultricies dui bibendum et. Morbi laoreet velit ut lacus posuere iaculis. Sed a condimentum nisl. Aenean sit amet erat orci. Curabitur tristique vel mi ut ultrices. Suspendisse tincidunt ex nec dui commodo faucibus. Proin vel luctus orci. Etiam blandit consectetur dolor nec consequat. Maecenas eget diam nec mi sagittis maximus. Suspendisse a sapien augue. Nullam rhoncus libero eu lacinia mattis. Suspendisse neque dolor, venenatis a finibus ac, mattis et nunc. Nulla fermentum nunc ac urna iaculis varius. Etiam malesuada dui nec nisl lacinia, at placerat libero volutpat. Etiam nisl turpis, ullamcorper ut tempus eu, scelerisque at lorem. Sed vel placerat diam. Maecenas vel aliquam sapien. Duis ut pulvinar libero."

const words = lorem.split(" ").length
console.log(words)

let countWords = 1

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    countWords++
  }
}

console.log(countWords)

let etCounter = 0

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] + lorem[i + 1] + lorem[i + 2] === " et") {
    etCounter++
  }
}

console.log(etCounter)

let phraseToCheck = "A man, a plan, a canal, Panama!"

let cleanString = "" //will contain string without special characters

//loops over the string and ignores anything outside a-z (special characters)
// "amanaplanacanalpanama"
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase()
  if (char >= "a" && char <= "z") {
    cleanString += char
  }
}

let reversed = ""
for (let i = cleanString.length - 1; i >= 0; i--) {
  reversed += cleanString[i]
}
console.log(cleanString, reversed) //they are the same "amanaplanacanalpanama"
