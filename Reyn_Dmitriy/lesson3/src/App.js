import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Menu from './Menu';


class App extends React.Component {
	render() {
		const menuItems = [
			{href:"/", title:"Main"},
			{href:"/downloads", title:"Downloads"},
			{href:"/contacts", title:"Contacts"},
			{href:"/about", title:"About"},
		]
		return <div>
				<h1>Второе приложение на React</h1>
				<p>Hello React!... again</p>
			<Login/>
			<Menu titleMenu="Основное меню сайта" items={menuItems}/>
		</div>;
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));
