import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";




class Login extends Component{
    render(){
        return(
            <div>
                <Input type = "text" placeholder = "Введите login"/>
                <Input type = "password" placeholder = "Введите password"/>
                <Button type = "submit" title = "Sign in"/>
            </div>


        )
    }
}

export  default Login
