//making TypeScript type assignments for javascript does not concatenate string with number
//In this scenario we would use the '+' signal to transform the parameters into a number
function add(n1, n2) {
  return n1 + n2
}

const number1 = "5"
const number2 = 2.8

const result = add(number1, number2)
console.log(result)
