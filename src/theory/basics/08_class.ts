// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Assitant extends Person{
    
    role: string
    
    constructor(id: number, name: string, role: string){
        super(id, name)
        this.role = role
    }
    
}