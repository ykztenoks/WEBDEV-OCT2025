const obj = {
  firstName: "daniel",
  lastName: "skonetzky",
  age: 25,
  isBald: true,
  currentStudents: ["Martina", "Pari", "Luana", "Alejandro", "Phil"],
  address: {
    street: "street",
    neighborhood: "neigh",
    number: 0,
  },
  greet: () => {
    console.log("Hello")
  },
}

const arrObj = [{}, {}, {}]

console.log(obj)
console.log(obj.firstName)
console.log(obj.lastName)
console.log(obj.age)
console.log(obj.isBald)
console.log(obj.currentStudents)
console.log(obj.address.street)
console.log(obj.greet())

delete obj.address.street

console.log(obj)

console.log("Object.values => ", Object.values(obj))
console.log("Object.keys => ", Object.keys(obj))

for (key in obj) {
  console.log(key)
  console.log(obj[key]) // this is dynamic, it replaces key with the actual string value
  console.log(obj.key) // <<< doesn't work, obj has no "key" property
}
