// let total = 0

// function add(num1, num2) {
//   total = num1 + num2
// }

// add(2, 2)

// console.log(total)

// =================================
//function declaration
// function sum(num1, num2) {
//   console.log("this is a:", num1)
//   console.log("this is b:", num2)
//   const result = num1 + num2
//   return result
// }

// sum(2, 3)
// sum(5, 2)
// sum("hello", "hi")

// //arrow function syntax
// const greet = (name) => {
//   return "Welcome, " + name
// }

// console.log(greet("daniel"))
// console.log(greet("uzi"))
// console.log(greet("Martina"))
// console.log(greet("Pari"))
// console.log(greet("Alejandro"))
// console.log(greet("Luana"))
// console.log(greet("Phil"))
// console.log(greet("Dovyd"))

const numArr = [1, 2, 3, 4, 5]
const studentsArr = ["pari", "martina", "alejandro"]
const booleanArr = [true, false, false, true]

numArr.pop() // [1, 2, 3, 4]
numArr.shift() // [2, 3, 4]
console.log(numArr)

numArr.push(5) // [2, 3, 4, 5]
numArr.unshift(1) // [1, 2, 3, 4, 5]

console.log(numArr)

booleanArr.splice(1, 5)

console.log(booleanArr)
