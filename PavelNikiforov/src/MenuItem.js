import React from 'react'

class MenuItem extends React.Component {
    render() {
        const {href, title} = this.props
        return (
            <li className="menu__item"><a href={href} className="menu__link">{title}</a></li>
        )
    }
}

export default MenuItem