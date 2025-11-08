const randomArr = [1, "array", true, undefined]

// randomArr.map((element, index) => {})

console.log(
  randomArr.map((element, index) => {
    //loops over randomArr and returns every element
    return `${index}: ${element}` //returns a new array, with the same items
  })
)
// =============================================

const numArr = [1, 2, 3, 4]

function multiplyBy2(numsArray) {
  return numsArray.map((num) => {
    return num * 2
  })
}

console.log(multiplyBy2(numArr))

// =============================================

const objArr = [
  { name: "Daniel", age: 25, email: "email@email.com" },
  { name: "Phil", age: 25, email: "email@email.com" },
  { name: "Martina", age: 25, email: "email@email.com" },
  { name: "Alejandro", age: 25, email: "email@email.com" },
]

const objWithNamesOnly = objArr.map((obj) => {
  return { name: obj.name }
})

console.log(objWithNamesOnly)

// =============================================

const randomNums = [1, 2, 3, 4, 10, 13, 58, 91]

const even = randomNums.filter((num) => {
  if (num % 2 === 0) {
    return num
  }
})

const odds = randomNums.filter((num) => {
  if (num % 2 !== 0) {
    return num
  }
})

console.log(even)
console.log(odds)

const students = [
  { name: "Daniel", age: 25, email: "email@email.com", isActive: false },
  { name: "Luana", age: 25, email: "email@email.com", isActive: true },
  { name: "Phil", age: 25, email: "email@email.com", isActive: true },
  { name: "Martina", age: 25, email: "email@email.com", isActive: true },
  { name: "Alejandro", age: 25, email: "email@email.com", isActive: true },
  { name: "Dovyd", age: 25, email: "email@email.com", isActive: true },
  { name: "Pari", age: 25, email: "email@email.com", isActive: true },
  { name: "Uzi", age: 25, email: "email@email.com", isActive: true },
]

const activeStudents = students.filter((student) => {
  if (student.isActive) {
    return student
  }
})

console.log(activeStudents)

// ========================================

const nums = [1, 2, 3, 4, 5, 10, 30]

//map, filter takes the element as first argument
//reduce takes the element as second argument
const sumAll = nums.reduce((accumulator, element) => {
  // by default accumulator is 0 initially
  return (accumulator += element)
})

console.log(sumAll)

// order alphabetically
const sortedStudents = students.sort((currentElement, nextElement) => {
  return currentElement.name.localeCompare(nextElement.name)
})

// ================================================

const unsortedNums = [90, 54235231, 32, 1, 2, 78, 11]

const ascend = unsortedNums.sort((a, b) => {
  return a - b
})

const descend = unsortedNums.sort((a, b) => {
  return b - a
})

console.log(sortedStudents)
console.log(ascend)
