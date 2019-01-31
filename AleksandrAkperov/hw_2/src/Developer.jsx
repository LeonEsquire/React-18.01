class Developer {
    constructor (expc, spec, manager, text) {
        this.expc = expc;                  //стаж работы
        this.spec = spec; 				 //специализация
        this.manager = manager;
        this.text = text;
    }
}

const DeveloperOne = new Developer(10, 'IT', 'Avramenko', 'текст импортированный из Developer');


export default DeveloperOne;
