import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends Component {
	render(){
				const items = this.props.items.map((item, index) => {
					return <li key={index}><a href={item.href}>{item.title}</a></li>
				});


		return (

				<div>
					<h1>{this.props.titleMenu}</h1>
					<ul>
						{items}
					</ul>
				</div>

			)
	}
}