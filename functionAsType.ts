//++++++++++++++++ Functions Return types and void +++++++++++++

//This function return as number
function add5(n1: number, n2: number) {
  return n1 + n2
}
console.log(add5(1, 1)) //This function is returning as number

//This function return as string
function add6(n1: number, n2: number) {
  return n1.toString() + n2.toString()
}
console.log(add6(1, 1))

//This Function can not return a value because is using 'void'
function printResult2(num: number): void {
  // return 'Result: ' + num
  console.log("Result: " + num)
}

printResult2(add5(1, 12))

let combineValues1: Function
combineValues1 = add5

combineValues = 5
//Here we can get a runtime error 'Uncaught TypeError: combineValues is not a function'
// to prevent that error I used the 'Function' type when we declare a variable;
console.log(combineValues1(8, 8))

//Now this combine function accept any function, takes no parameters
//and Return a number
let combineValues2: (a: number, b: number) => number

combineValues2 = add5
//intentional error
combineValues2 = printResult2

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
