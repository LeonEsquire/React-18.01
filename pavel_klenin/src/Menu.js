import React from 'react';

import styles from './Menu.css';


class Menu extends React.Component {
    render () {
        const menu = this.props.items.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item.href}>{item.title}</a>
                </li>
            );
        });
        
        return (
            <div>
                <ul className={styles.menu}>{menu}</ul>
            </div>
        );    
    };
}

export default Menu;