import React from 'react';

export default class Login extends React.Component {
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
            <div className="jumbotron text-center">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>Login:</h1>
                        <input type="text" placeholder={'Enter your login here'} value={this.state.value}
                               onChange={this.handleChange}/><br/>
                    </label><br/>
                    <label>
                        <h1>Password:</h1>
                        <input type="password" placeholder={'Enter your password here'}/><br/>
                    </label><br/>
                    <input className="btn btn-dark" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

