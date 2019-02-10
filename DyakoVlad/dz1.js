function loop(times = 0, callback = null) {
    while (times > 0) {
        callback();
        times--;
    }
}

loop(0, ()=> console.log('Hello!'));


//Площадь правильного n-угольника:
function calculateArea(sideLength, n) {
    return {
        area: (Math.pow(sideLength, 2)*n)/(4*Math.tan(Math.PI/n)),
        figure: `${n}-угольник`,
        input: {
            sideLength: sideLength,
            n: n
        }
    }
}

console.log(calculateArea(4, 4));


class Human {
    constructor(name = String, age = Number, dateOfBirth = Date) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`
    }
}

class Employee extends Human {
    constructor(salary = Number, department = String) {
        super();
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + ` ${this.salary}, ${this.department}`
    }
}

class Manager extends Employee {

    constructor() {
        super();
            this.developerArray = Array[Developer];
    }

    addDeveloper(developer) {
        this.developerArray.push(developer)
    }

    deleteDeveloper(developer) {
        delete this.developerArray[developer]
    }
}

class Developer extends Employee {
    constructor() {
        super();
        this.manager = Manager;
    }

    setNewManager (manager) {
        this.manager = manager
    }
}