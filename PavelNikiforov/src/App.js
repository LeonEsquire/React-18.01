import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './Menu'
import FormLogin from './FormLogin'

import './scss/style.scss';

class App extends React.Component {
    render() {
        const menuItems = [
            {href: "/", title: "Main page"},
            {href: "/contacts", title: "Contacts"}
        
        ],
        name = "main"
        return (
            <React.Fragment>
                <Menu items={menuItems} name={name}/>
                <FormLogin/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))