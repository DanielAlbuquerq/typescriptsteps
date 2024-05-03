const Person = {
  name: "Maximilian",
  age: 30,
}
// function add(n1: number, n2: number) {
//   return n1 + n2
// }

// function printResult(num: number) {
//   console.log("Result: " + num)
// }

// printResult(add(2, 1))

// let combineValues: (a: number, b: number) => number

// combineValues = add
// combineValues = printResult

// // combineValues = 5;
// console.log(combineValues(4, 8))

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code }
}
generateError("e", 500)

console.log("daniel")
