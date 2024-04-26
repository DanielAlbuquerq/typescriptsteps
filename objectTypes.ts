//++++++++++++ Obejct Types ++++++++++++++++
const person: {
  name: string
  age: number
  nickname: string
} = {
  //const person = {
  name: "daniel",
  age: 4,
  nickname: "Bodybuilder",
}

console.log(person.age)
//++++++++++++++++++++++++++++++++++++

//Nested Objects and Types
const pperson: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["workout", "yoga", "play games"],
}

//To use mix array we need to type as any
let favoriteActivities: any[]
favoriteActivities = ["programming", 1]

for (const hobby of pperson.hobbies) {
  console.log(typeof hobby)
  console.log(typeof pperson.name)

  //this console.log is based on length of the array.
  console.log(pperson.hobbies[0])
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with tuples
const ppperson: {
  name: string
  age: number
  hobbies: string[]
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["workout", "yoga", "play games"],
  role: [2, "author"],
}

// //To use array with multiple type we need to type as any
// let favoriteActivities: any[]
// favoriteActivities = ["programming", 1]

for (const hobby of ppperson.hobbies) {
  console.log(typeof hobby)
  console.log(typeof ppperson.name)

  //this console.log is based on length of the array.
  console.log(ppperson.hobbies[0])
}
