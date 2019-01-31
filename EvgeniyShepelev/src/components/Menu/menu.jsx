import React, {Component, Fragment} from 'react';

class Menu extends Component {
	constructor() {
		super();
	}

	render() {
		const menuItems = [
		{href:'/', title: 'Главная'},
		{href:'/articles', title: 'Статьи'},
		{href:'/about', title: 'О нас'},
		{href:'/contacts', title: 'Контакты'}
		]

		const items = this.props.items.map((item)=>{
			return <li><a href={item.href}>{item.title}</a></li>
		});
		return(
			<div>
				<ul>
					{items}
				<ul>
			</div>
			);
	}
}

export default Menu;