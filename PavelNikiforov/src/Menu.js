import React from 'react'

import MenuItem from './MenuItem'

class Menu extends React.Component {
    render() {
        console.log(this.props)
        const name = `menu__${this.props.name}`,
        items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href} title={item.title}></MenuItem>
        })

        return (
            <nav className="menu">
                <ul className={name}>
                    {items}
                </ul>
            </nav>
        )
    }
}

export default Menu