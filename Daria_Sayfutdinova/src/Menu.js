import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from './menuItems'

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) =>
            <MenuItems key={"index"} href={item.href} >{item.name} </MenuItems>
        );

        return <div>
            <h2>{this.props.title}</h2>
            <ul>
                {items}
            </ul>
        </div>

    }
}

export default Menu;