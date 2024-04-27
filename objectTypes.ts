//++++++++++++ Obejct Types ++++++++++++++++
const person1: {
  name: string
  age: number
  nickname: string
} = {
  //const person1 = {
  name: "daniel",
  age: 4,
  nickname: "Bodybuilder",
}

console.log(person1.age)
//++++++++++++++++++++++++++++++++++++

//Nested Objects and Types
const person2: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["workout", "yoga", "play games"],
}

//To use multiple type in array we need to type as any
let favoriteActivities: any[]
favoriteActivities = ["programming", 1]

for (const hobby of person2.hobbies) {
  console.log(typeof hobby)
  console.log(typeof person2.name)

  //this console.log is based on length of the array.
  console.log(person2.hobbies[0])
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with tuples
const person3: {
  name: string
  age: number
  hobbies: string[]
  //here in 'role' we set types and can not change later
  //Fixed-length array
  role: [number, string]
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["workout", "yoga", "play games"],
  role: [2, "author"],
}

console.log(person3.role[1])
//intentional error
person3.role[1] = 2

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with Enum

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

//if you don't set a number enum assign a successor number
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person4 = {
  name: "Maximilian",
  age: 30,
  hobbies: ["workout", "yoga", "play games"],
  role: Role.ADMIN,
}

if (person4.role === Role.AUTHOR) {
  console.log("is author")
}
if (person4.role === Role.ADMIN) {
  console.log("is Admin")
}
