//++++++++++++++++ Functions Return types and void +++++++++++++

//This function return as number
function add3(n1: number, n2: number) {
  return n1 + n2
}
console.log(add3(1, 1)) //This function is returning as number

//This function return as string
function add2(n1: number, n2: number) {
  return n1.toString() + n2.toString()
}
console.log(add2(1, 1))

//This Function can not return a value because is using 'void'
function printResult2(num: number): void {
  // return 'Result: ' + num
  console.log("Result: " + num)
}

printResult2(add3(1, 12))

let combineValues
combineValues = add3
combineValues = 5

console.log(combineValues(8, 8))
