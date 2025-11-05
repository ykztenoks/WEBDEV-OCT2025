//creating class Animal, with properties: type, age, diet
class Animal {
  constructor(type, age, diet) {
    // these will be assigned when instantiating
    this.type = type
    this.age = age
    this.diet = diet
  }
}

//creating class Dog, which extends Animal class
class Dog extends Animal {
  constructor(type, age, diet, name) {
    super(type, age, diet)
    //super will assign the same logic for the properties coming from animal
    //but Dog has an extra property: name
    this.name = name
  }

  //bark is a static method, meaning it will be accessed by the class not the instance
  //Dog.bark()
  static bark() {
    console.log("woof auau")
  }
}

class Cat extends Animal {
  constructor(type, age, diet, name, isKiller) {
    super(type, age, diet)
    this.name = name
    this.isKiller = isKiller
  }
}

//creating instances of class Dog and Cat
const dog = new Dog("dog", 2, "fish", "buddy")
const jasmine = new Dog("dog", 5, "fish", "jasmine")
const cat = new Cat("cat", 3, "fish", "garfield", false)
const fede = new Cat("cat", 3, "fish", "fede", true)

Dog.bark()

class User {
  //# means it is a private property, only accessible in the class
  #id = Math.random() * 1000 + "asfgsdahgsd"
  constructor(name, age, email, password) {
    this.name = name
    this.age = age
    this.email = email
    this.password = password

    this.isActive = true
    this.isAdmin = false
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }

  deactivate(user) {
    if (this.isAdmin) {
      user.isActive = false
    }
  }

  getId(user) {
    if (this.isAdmin) {
      return user.#id
    }
  }
}

class Admin extends User {
  constructor(name, age, email, password) {
    super(name, age, email, password)
    this.isAdmin = true
  }
}

const daniel = new Admin("daniel", 25, "daniel@email", "Hello123!")

const uzi = new User("uzi", 25, "uzi@email.com", "hello123")
const phil = new User("phil", 25, "phil@email.com", "hello123!")
const dovyd = new User("dovyd", 25, "dovyd@email.com", "hello123")

uzi.sayHello()
phil.sayHello()
dovyd.sayHello()
daniel.sayHello()

daniel.getId(uzi) //works, prints Uzi's id
daniel.deactivate(phil) //works, will turn isActive property from Phil's instance to false

dovyd.deactivate(dovyd) // nothing happens, if doesn't get read
