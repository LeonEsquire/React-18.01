import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <li><a key={index} href={item.href}>{item.name}</a></li>
        });
        

        return <div id='menu'>
            <h2>Menu</h2>
            <ul>
                {items}
            </ul>
        </div>   
    }
}

Menu.defaultProps = {
    name: "main page",
    href: "/"
};

Menu.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Menu;