import React, {Component} from 'react';
import Menu from './Menu'
import Login from './Login'


export default class App extends Component {
    render() {
        const menuItems = [
            {href: "/", title: "Главная"},
            {href: "/about", title: "О нас"},
            {href: "/service", title: "Услуги"},
            {href: "/contacts", title: "Контакты"}
        ];

        return <div>
            <h1 className={'mb-2'}>Первое приложение на React</h1>
            <Menu titleMenu="Основное меню сайта" items={menuItems}/>
            <Login/>
        </div>;
    }
}