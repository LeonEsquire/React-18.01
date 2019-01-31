import React, {Component} from 'react';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItem key={index} title={item.title} href={item.href}/>
        });

        return (
            <div>
                <h1>{this.props.titleMenu}</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}