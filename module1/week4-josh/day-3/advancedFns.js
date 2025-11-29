console.log(myFunction()) // all of these work because myFunction is hoisted
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())
console.log(myFunction())

// console.log(arrowFn()) // error: Cannot access 'arrowFn' before initialization
const arrowFn = () => {
  return "this is also my function"
}

function myFunction() {
  return "this is my function"
}
//  =============================================

function getString(anotherFn) {
  return anotherFn()
}

console.log("calling function with function", getString(myFunction))

//  =============================================
function lotsOfArgs(banana, apple, something, what) {
  console.log(arguments) //reserved keyword arguments
}

lotsOfArgs(1, 2, true, "string")

let total = 0

function sum(num1, num2) {
  total += num1 + num2
}

sum(1, 2)

console.log(total)
