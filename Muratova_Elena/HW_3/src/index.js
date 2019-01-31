import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';
import './style.css';

class App extends React.Component {
    render() {
        const menuItems =[
            {href:'/', title:'Главная'},
            {href:'/about', title:'O нас'},
            {href:'/service', title:'Услуги'},
            {href:'/cntacts', title:'Контакты'}
        ]

        return <div>
            <h1>Первое приложение на React</h1>
            <Menu titleMenu="Основное меню сайта" items={menuItems} />
            <Login/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));


