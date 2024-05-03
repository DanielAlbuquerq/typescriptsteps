//Rest Parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addNumbers = add(5, 4, 3, 2, 1)
console.log(addNumbers)
////////////////////

const add12 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addNumbers1 = add12(10, 20, 15)
console.log(addNumbers1)
////////////////////////
