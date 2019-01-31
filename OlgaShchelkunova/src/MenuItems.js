import React from 'react';
import PropTypes from 'prop-types';

class MenuItems extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>{this.props.children}</a>
            </li>
        );
    }
}

MenuItems.defaultProps = {
    children: "Главная (страница по умолчанию)",
    href: "/"
};

MenuItems.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};


export default MenuItems;