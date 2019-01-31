import React, {Component} from 'react';
import MenuItems from './MenuItems';

export default class Menu extends Component {
    render() {

        const items = this.props.items.map((item, index)=> {
            return <MenuItems key={index} href={item.href}>{item.title}</MenuItems>
        });

        return (
            <div>
                <h2>{this.props.titleMenu}</h2>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}