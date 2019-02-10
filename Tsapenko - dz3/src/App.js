import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';


class App extends React.Component {
	render() {
		const menuItems = [
			{href:"/", title:"ГЛАВНАЯ"},
			{href:"/downloads", title:"ЗАГРУЗКА"},
			{href:"/contacts", title:"КОНТАКТЫ"},
			{href:"/about", title:"О НАС"},
		]
		return <div>
				<h1>Форма ввода логина и пароля</h1>
				<p>Введите имя и пароль</p>
			<Login/>
			<Menu titleMenu="Основное меню сайта" items={menuItems}/>
		</div>;
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));