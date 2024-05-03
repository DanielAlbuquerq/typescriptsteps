const userName10 = "Max"

let age = 15
age = 10

//'result' variable out of a function is a global variable.
//var result;

function add10(a: number, b: number) {
  //to use the 'result' value outside function
  // we need to take the 'result' variable out of this function
  var result
  age = 3
  console.log(age)

  result = a + b
  return result
}

add10(1, 1)

//We can not console.log 'result' because is local variable
console.log(result)

if (true) {
  //using with var we can reassign the value
  //using with let we CAN NOT reassign the value
  // I think let and const are better beacause force us
  //to write cleaner code
  var isOld = true
}

isOld = false
console.log(isOld)
