import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItems extends React.Component {
    render() {
        return(
            <li className="nav-item">
                <a className="nav-link" href={this.props.href}>{this.props.children}</a>
            </li>
        )
    }
}

MenuItems.defaultProps = {
    children: "Главная (smth went wrong, boy)",
    href: "/"
};

MenuItems.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};