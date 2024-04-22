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
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n1
  }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const resultPhrase = "Result is: "

const result = add(number1, number2, printResult, resultPhrase)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with Type assignment and inference
//Here I assigned the type of number1 and resultPhrase variables and made some inferences
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n1
  }
}

let number1: number
number1 = "s"
number1 = 5

console.log(number1)

const number2 = 2.8
const printResult = true

let resultPhrase = "Result is: "
resultPhrase = 3

console.log(typeof resultPhrase)
if (typeof resultPhrase === "number") {
  console.log("Variable type number: " + resultPhrase)
} else {
  console.log("Variable type: " + typeof resultPhrase)
}

const result = add(number1, number2, printResult, resultPhrase)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
