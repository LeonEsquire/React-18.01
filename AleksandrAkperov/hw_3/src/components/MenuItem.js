import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {

        return (
            <li>
                <a href={this.props.href}>{this.props.children}</a>
            </li>
        );
    }
}

MenuItem.defaultProps = {
    children: "Что-то пошло не так - ссылки не переданы. Не вопрос, передам, но надо разобраться с Login ",
    href: "/"
};

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default MenuItem;