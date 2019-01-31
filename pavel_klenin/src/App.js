import React from 'react';
import ReactDOM from 'react-dom';

import Developer from './Developer';
import Login from './Login';
import Menu from './Menu';

import styles from './App.css';

class App extends React.Component {
    render () {
        const menuItems = [
            {href:"/", title: "Главная"},
            {href:"/news", title: "Новости"},
            {href:"/products", title: "Продукты"},
            {href:"/about", title: "О нас"},
            {href:"/contacts", title: "Контакты"},
        ]

        const developer = new Developer();
        developer.showDev();
        console.log(styles);

        return (
            <div className = {styles.header}>
                <Menu title='Меню' items = {menuItems}/>
                <Login legend='Авторизация'/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.root'));


