class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor() 
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement
    this.hostElement = document.getElementById("app")! as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = "user-input"

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement
    
    this.configure()
    this.attach()

  private SubmitHandler(e: Event){
    e.preventDefault();
    console.log(this.titleInputElement.value)
  }

  private configure(){
    this.element.addEvenListener('submit', this.submitHandler)
  } 
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element)
  }
}
const prjInput = new ProjectInput()
