import React, {Component} from 'react';
import Menu from './components/Menu';
import Login from "./components/Login";

class App extends Component {
    render() {
        const menuItems = [
            {href:"/", title: "Главная"},
            {href:"/about", title: "Обо мне"},
            {href:"/service", title: "Мои проекты"},
            {href:"/contacts", title: "Контакты"}
        ];

        return <div>
                 <Menu titleMenu="Меню работает" items={menuItems}/>

                      <Login/>
        </div>;
    }
}

export default  App