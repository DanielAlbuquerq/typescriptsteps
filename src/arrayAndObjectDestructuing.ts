const hobbies1 = ["Sport", "Snooker", "Golf"]
const hobbies2 = ["Surfing", "Workout", "Games"]

//elements are pulled out in order
const [hobby1, ...remainingHobbie] = hobbies2

console.log(hobby1)
console.log(remainingHobbie)
////////////////////////

//we can get elements by keys
const person5: {
  firstName: string
  ageP: number
  hobbies: string[]
  role: [number, string]
} = {
  firstName: "Maximilian",
  ageP: 30,
  hobbies: ["workout", "yoga", "play games"],
  role: [2, "author"],
}

///////////////
let { firstName: userName11, ageP } = person5

//Can not console.log 'firstName', we overwrote firstName.
//console.log(firstName)

console.log(userName + " " + age)
userName = "Daniel"

//person5.firstName stay the same
console.log(person5.firstName)
