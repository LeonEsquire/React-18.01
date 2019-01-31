import React from 'react';


class Button extends React.Component{
    render(){
        return(
            <button type={this.props.type}> {this.props.title} </button>

        )
    }
}

export  default Button