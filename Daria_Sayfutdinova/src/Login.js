import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Inputs extends Component {
    render() {
        return <p>{this.props.n} :<input name = {this.props.n} type = {this.props.t} placeholder = {this.props.p} /></p>
    }
}

class Button extends Component {
    render () {
        return <button>{this.props.name}</button>
    }
}
export default class Login extends Component {
    render () {

        return <form>Form
                <Inputs n = {'Name'} t = {'text'} p = {'Enter your name'}/>
                <Inputs n = {'Date of birth'} t = {'date'} p = {'Date of birth'}/>
                <Inputs n = {'Password'} t = {'password'} p = {'Enter your password'}/>
                <Button name = {'Submit'}/>
                <Button name = {'Clear'}/>
        </form>
    }
}