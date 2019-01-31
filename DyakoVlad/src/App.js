import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h1>Name:</h1><br/>
                    <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
                </label><br/>
                <input class="btn btn-primary" type="submit" value="Submit" />
            </form>
        );
    }
}

class Developer {
    constructor(name = String, age = Number, dateOfBirth = Date) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));