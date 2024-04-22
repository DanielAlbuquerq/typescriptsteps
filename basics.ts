//making TypeScript type assignments for javascript does not concatenate string with number
//In this scenario we would use the '+' signal to transform the parameters into a number
function add(n1: number, n2: number) {
  return n1 + n2
}

const number1 = "5"
const number2 = 2.8

const result = add(number1, number2)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Instead of using conditionals to validate inputs at runtime
// We can check and avoid errors during development with TypeScript
function add(n1: number, n2: number) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input")
  // }
  return n1 + n2
}
const number1 = 5
const number2 = 2.8
const result = add(number1, number2)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with boolean value
function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2)
  } else {
    return n1 + n1
  }
}

const number1 = "5"
const number2 = 2.8
const printResult = true
const result = add(number1, number2, printResult)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
