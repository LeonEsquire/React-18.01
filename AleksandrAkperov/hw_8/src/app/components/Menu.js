import React from 'react';
import {Link} from 'react-router';

<<<<<<< HEAD
export default class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">{this.props.brand}</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
=======

const Menu = props => {
     console.log(props.children);
   return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container">
               <Link to='/' className="navbar-brand" >{props.brand}</Link>
                   <div className="collapse navbar-collapse">
                       <ul className="navbar-nav">
                           {props.children}
                       </ul>
                   </div>
           </div>
       </nav>

);



};

export  default Menu;


>>>>>>> hw_9
