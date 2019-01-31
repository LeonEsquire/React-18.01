export default class Developer {
    constructor(name = 'P.Klenin') {
        this.name = name;
    }

    showDev() {
        console.log(`Developer: ${this.name}`);
    }
}
