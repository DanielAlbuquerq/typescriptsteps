//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Union Types
function combine(input1: number, input2: number) {
  const result = input1 + input2
  return result
}
//Intentional error
console.log(combine("Daniel ", "Ana"))
//-------

//Now the Combine1 Function can accept union types
function combine1(input1: number | string, input2: number | string) {
  let result: any

  // I noticed that we commonly need to implement a runtime check
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
    console.log("type number - Total: " + result)
  } else {
    result = input1.toString() + " " + input2.toString()
  }
  return result
}

const combinedAges = combine1(30, 26)
console.log(combinedAges)

const combinedNames = combine1("Daniel", "Mendes")
console.log(combinedNames)

//++++++++++++++++++++++++++++++++++++++++++++++++++
