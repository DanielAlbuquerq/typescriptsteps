//making TypeScript type assignments for javascript does not concatenate string with number
//In this scenario we would use the '+' signal to transform the parameters into a number
function add1(n1: number, n2: number) {
  return n1 + n2
}
const number1 = "5"
const number1_2 = 2.8

//intentional error
const result1 = add1(number1, number1_2)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Instead of using conditionals to validate inputs at runtime
// We can check and avoid errors during development with TypeScript
function add2(n1: number, n2: number) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input")
  // }
  return n1 + n2
}
const number2 = 5
const number2_1 = 2.8
const result2 = add2(number2, number2_1)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with boolean value
function add3(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n1
  }
}

const number3 = 5
const number3_1 = 2.8
const printResult = true
const resultPhrase = "Result is: "

const result3 = add3(number3, number3_1, printResult, resultPhrase)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Working with Type assignment and inference
//Here I assigned the type of number1 and resultPhrase variables and made some inferences
function add4(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n1
  }
}

let number4: number

//intentional error
number4 = "s"
number4 = 5

console.log(number1)

const number4_1 = 2.8
const printResult4 = true

let resultPhrase4 = "Result is: "

//intentional error
resultPhrase4 = 3

console.log(typeof resultPhrase4)
if (typeof resultPhrase4 === "number") {
  console.log("Variable type number: " + resultPhrase4)
} else {
  console.log("Variable type: " + typeof resultPhrase4)
}

const result4 = add4(number4, number4_1, printResult4, resultPhrase4)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
