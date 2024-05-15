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
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person2 implements Greetable {
  //intentional error
  //name: number;
  name = "da"
  age = 30

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name)
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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
