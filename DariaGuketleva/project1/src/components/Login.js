import React, {Component} from "react";

class Login extends Component{
    render(){
        return(
            <div>
            <label htmlFor="login">{this.props.children}</label>
            <input type="text" id='login' pattern='[A-Za-z]+' required/>
            </div>
        )
    }
}


export default Login;