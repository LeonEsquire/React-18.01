import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component{
    render() {
        const menuItems = [
            {href: "/", title: "Main page"},
            {href: "/about", title: "About us"},
            {href: "/service", title: "Services"},
            {href: "/contacts", title: "Contacts"}
        ]

        const loginItems = [
            {type: "text", title: "login"},
            {type: "password", title: "password"},
            {type: "button", title: "push me"}
        ]


        return (<div>
            <h1>First project</h1>
            <Menu titleMenu="Main menu" items={menuItems}/>
            <Login titleLogin="Login and password" items={loginItems}/>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));