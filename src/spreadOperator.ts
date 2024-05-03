const hobbies = ["Sports", "Cooking"]
const activeHobbies = ["Hiking"]

//Here we get an error:
activeHobbies.push(hobbies)

// to insert one value we could do this
//setting a specific position. > activeHobbies.push(hobbies[0])

//OR

//Using Spread Operator
activeHobbies.push(...hobbies)
console.log(hobbies)
console.log(activeHobbies)

//coping values with Spread Operator
const person = {
  name: "Max",
  age: 30,
}

const copiedPerson = { ...person }
console.log(copiedPerson)
