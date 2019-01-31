import React, {Component} from "react";

class Password extends Component{
    render(){
        return(
            <div>
                <label htmlFor="password">{this.props.children}</label>
                <input type="password" id='password' pattern='[A-Za-z0-9]+' required/>
            </div>
        )
    }
}


export default Password;