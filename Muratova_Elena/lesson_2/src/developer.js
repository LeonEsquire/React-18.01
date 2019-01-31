class Developer {

    constructor(name, age, dateOfBirth) {
      this.name = name;
      this.age = age;
      this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
      return `Имя: ${this.name}. Возраст: ${this.age}. Дата рождения: ${this.dateOfBirth}`
    }
  }

let alenka = new Developer('Алёнка', 23, '28.06.1995');

console.log(alenka.displayInfo());