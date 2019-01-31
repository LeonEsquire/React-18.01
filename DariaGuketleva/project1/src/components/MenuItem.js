import React, {Component} from "react";

class MenuItem extends Component{
    render(){

        return(
            <li><a href={this.props.href}>{this.props.children}</a></li>

        )
    }
}


export default MenuItem;