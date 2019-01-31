import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu'
import LoginForm from './components/LoginForm'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            'user':'',
        };
    }

    logining() {

        let login=document.querySelector('#login').value;
        this.setState({
            'user': login,
        });
        console.log(login)
    }
    render(){
        const items=[
        {'href': '/', 'title': 'Главная'},
        {'href': '/catalog', 'title': 'Каталог'},
        {'href': '/account', 'title': 'Личный кабинет'},
        {'href': '/contacts', 'title': 'Контакты'},
    ];
        return <div>
            <h1>Первое приложение на React</h1>
            <Menu items={items}>Меню</Menu>
            <LoginForm logining={()=>this.logining()}/>
            <div>Пользователь: {this.state.user}</div>
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
