let userInput: unknown
let userName: string

userInput = 5
userInput = "Daniel"

// We can not assign 'unknown' to another type,
// even if we fill the variable with a string value
//Otherwise the type 'any' accepts this situation.
userName = userInput
console.log(typeof userInput)

//before assign it 'unknown' type to a new type of variable,
//We need an extra check to know if the type is equal
if (typeof userInput === "string") {
  //now is possible to assign 'userInput' to 'userName' with no error
  userName = userInput
  console.log("ok")
}
