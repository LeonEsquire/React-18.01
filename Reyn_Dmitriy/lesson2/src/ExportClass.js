export default class Developer {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	printAll() {
		console.log("Меня зовут", this.name, "и мне", this.age);
	}
}
