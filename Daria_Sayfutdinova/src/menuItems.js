import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MenuItems extends Component {
    render() {
        return (
            <li>
            <a href={this.props.href}>{this.props.children}</a>
            </li>
        )
    }

}

MenuItems.defaultProps = {
    children: "Главная (страница по умолчанию)",
    href: "/"
};

export default MenuItems;