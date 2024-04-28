//++++++++++++++++ Functions types and void +++++++++++++

//This function return as number
function add(n1: number, n2: number) {
  return n1 + n2
}
console.log(add(1, 1)) //This function is returning as number

//This function return as string
function add1(n1: number, n2: number) {
  return n1.toString() + n2.toString()
}
console.log(add1(1, 1))

//This Function can not return a value because is using 'void'
function printResult1(num: number): void {
  // return 'Result: ' + num
  console.log("Result: " + num)
}
