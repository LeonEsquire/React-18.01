export default class Developer {
    constructor(name = 'Elena', age = '32', dateOfBirth = '25.09.86') {
        Object.assign(this, {name, age, dateOfBirth});

        console.log(this.displayInfo());

    }

    displayInfo() {
        return Object.values(this).join(', ')
    }
}
