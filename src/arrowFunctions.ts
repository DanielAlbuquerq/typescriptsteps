const add11 = (a: number, b: number) => a + b
const printOutput = (output: string | number) => {
  console.log(output)
}

//A more concise syntax of 'printOutput' function:
const printOutput2: (a: number | string) => void = (output) =>
  console.log(output)
printOutput2(2)

const button = document.querySelector("button")

if (button) {
  //using arrow function, short and concise syntax
  button.addEventListener("click", (event) => console.log(event))
}

printOutput("Number but string")
console.log(add11(2, 5))
