import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Login';
import Menu from './Menu';

class App extends React.Component {
    render() {
        const menuItems = [
            {href: '/', name: 'main page'},
            {href: '/contacts', name: 'contacts'}
        ];
        return (
            <React.Fragment>
                <LoginForm />
                <Menu items={menuItems}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));