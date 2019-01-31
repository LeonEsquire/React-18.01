import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu'

class App extends Component {
    render() {
        const menuItems = [
            {href: '/', name: "Home"},
            {href: 'products', name: "Products"},
            {href: 'contacts', name: "Contacts"},

        ];

       return ( <div>
           <Menu title = "Main menu" items = {menuItems}/>
           <h1>Hello!</h1>
           <Login/>
       </div> )

    }

}

ReactDOM.render (<App/>, document.querySelector('#root'))
