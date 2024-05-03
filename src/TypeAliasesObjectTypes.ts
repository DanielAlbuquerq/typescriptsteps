//+++++++++++++++++++ Working with Type Aliases / Custom Types ++++++++++++++++++

// /!\ Type aliases can be used to "create" your own types.
//Here we are using a reusable type
type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combine3(
  input1: Combinable,
  input2: Combinable,
  //Using literal types in conjuction with union types here
  resultConversion: ConversionDescriptor
) {
  let result: any
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

const combinedAges3 = combine3(30, 26, "as-number")
console.log(combinedAges3)

const combinedStringAges3 = combine3("30", "26", "as-number")
console.log(combinedAges3)

const combinedNames3 = combine3("Daniel", "Mendes", "as-text")
console.log(combinedNames3)

//------------

type Product = { title: string; price: number }
const p1: Product = { title: "A Book", price: 12.99, isListed: true }

type User = { name: string } | string
let u1: User = { name: "Max" }
u1 = "Michael"

console.log(u1)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
