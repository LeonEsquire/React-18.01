import React, {Component} from "react";

class LoginButton extends Component {

    render() {
        return (

            <button onClick={this.props.logining}>{this.props.children}</button>
        )
    }
}


export default LoginButton;