export class Developer {
    constructor(name, age, department = 'No department') {
        this.name = name
        this.age = age
        this.department = department
    }

    sayHi() {
        return `Hi! I am ${this.name} and I am a developer!`
    }
}