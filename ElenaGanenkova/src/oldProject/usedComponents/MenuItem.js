import React from 'react';


class MenuItem extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>{this.props.title}</a>
            </li>
        );
    }
}


export default MenuItem;