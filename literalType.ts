// Working with Literal Types in conjuction with union types
function combine2(
  input1: number | string,
  input2: number | string,

  //Using literal types in conjuction with union types here
  resultConversion: "as-number" | "as-text"
) {
  let result: any

  // I noticed that we commonly need to implement a runtime check.
  // if we change the comparasion in 'resultConversion' different from our reference we get an error.
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2
    console.log("type number - Total: " + result)
  } else {
    result = input1.toString() + " " + input2.toString()
  }
  return result
  // if (resultConversion === 'as-number'){
  //     return +result
  // } else {
  //     return result.toString()
  // }
}

const combinedAgesL = combine2(30, 26, "as-number")
console.log(combinedAgesL)

const combinedStringAgesL = combine2("30", "26", "as-number")
console.log(combinedAgesL)

const combinedNamesL = combine2("Daniel", "Mendes", "as-text")
console.log(combinedNamesL)

//++++++++++++++++++++++++++++++++++++++++++++++++++
