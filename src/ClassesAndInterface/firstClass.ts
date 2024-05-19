class Department {
  //static
  //we can set as private too
  static fiscalYear = 2020

  name: string
  localNumber: number

  constructor(n: string, a: number) {
    this.name = n
    this.localNumber = a
  }

  static createEmployee(name: string) {
    return { name: name }
  }
}

//Change static variable
const newFiscal = (Department.fiscalYear = 12)
console.log(newFiscal)

const accounting = new Department("Accounting", 13)
accounting.name = "IT"

console.log(accounting)
console.log(accounting.name)
//==================================================

//Constructor function with this in method
class Department2 {
  name: string

  constructor(n: string) {
    this.name = n
  }
  describe(this: Department2) {
    console.log("Department2: " + this.name)
  }
}

const financial1 = new Department2("financial").describe()

//===================================================

//++++++++++++++++ "Private" and "Public" Access.
class Department3 {
  public name: string
  private employees: string[] = []

  constructor(n: string) {
    this.name = n
  }
  describe(this: Department3) {
    console.log("Department3: " + this.name)
  }
  addEmployee(employee: string) {
    this.employees.push(employee)
  }
  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

//======================================================
const employee1 = Department.createEmployee("Mac")

console.log(employee1)

const financial2 = new Department3("financial2")
financial2.addEmployee("Daniel")
financial2.addEmployee("David")

financial2.describe()
financial2.printEmployeeInformation()

//employees are assigned as private, we can not set new values outside the class.
financial2.employees[2] = "Luis"
console.log(financial2.employees)

//======================================================

//+++++++++++++++++++++ interface ++++++++++++++++++++++

//Interface is used as a type.
//Interface can not have initializer *name: string = 'Daniel'*
//Remind! In the interface, we are using a semicolon.

interface Person {
  name: string
  age: number

  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: "Daniel",
  age: 25,
  greet(phrase: string) {
    console.log(phrase + " " + this.name)
  },
}
user1.greet("Hi there - I am")

//=========== Combine interfaces (extends name)

interface Named {
  readonly name: string
  //we can use optional parameters
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person2 implements Greetable {
  //intentional error
  //name: number;
  name = "da"
  age = 30

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name)
    } else {
      console.log("Hi")
    }
  }

  showName() {
    return this.name
  }
}

let person6 = new Person2("Daniel")
console.log(person6.showName())

//============== Interface as function type
interface AddFn {
  (a: number, b: number): number
}

let add7: AddFn

add7 = (n1: number, n2: number) => {
  return n1 + n2
}

//==================================================

//+++++++++++++ Intersectionn Types +++++++++++++++++

type Admin = {
  name: string
  privileges: string[]
}

type Studant = "snai"

type Employee = {
  name: string
  startDate: Date
}

//interface ElevatedEmployee extends Employee, Admin{}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: "Daniel",
  privileges: ["dd", "ddd"],
  startDate: new Date(),
}

type Combinable1 = string | number
type Numeric = number | boolean

type Universal = Combinable1 | Numeric

const e2: Universal = "I'm Boolean but String"

//+++++++++++++ More on Type Guards ++++++++++++++++++++++++++++++++

function add1(a: Combinable1, b: Combinable1) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}
type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name)

  //We can use 'in' and 'instanceof
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate)
  }
}
printEmployeeInformation(e1)

//++++++++++++++ Discriminated Unions ++++++++++++++++++++++
interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  console.log(typeof animal)

  let speed

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break

    default:
      break
  }
  console.log("Moving at speed: " + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 100 })

// +++++++++ Index Properties +++++++++++++++++++++++++++++++

//this is how to control which type of properties
interface ErrorContainer {
  //{ email: 'Not a valid email', username: 'Must start with charcter!'}
  [prop: string]: string
}
const errorBag: ErrorContainer = {
  email: "Not a valid email",
}

//========= Function Overloads ========================

type Combinable2 = string | number
//if we're calling this function with two numbers, we get back a number;
function add8(a: number, b: number): number
//if we're calling this function with two string, we get back a string;
function add8(a: string, b: string): number
//we can make different combinations, and type what to return in which case;
function add8(a: number, b: string): number
//
function add8(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add8("Max", "Schwarz")

//================= Optional Chaining ====================
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
}
//
console.log(fetchedUserData.job.title)
//We can use question mark to check if the property exists in the object.
console.log(fetchedUserData?.job?.title)
