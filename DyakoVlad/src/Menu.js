import React from 'react';
import MenuItems from './MenuItems'

export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <MenuItems key={index} href={item.href}>{item.title}</MenuItems>
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">DyakoVlad</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        {items}
                    </ul>
                </div>
            </nav>
        )
    }
}

