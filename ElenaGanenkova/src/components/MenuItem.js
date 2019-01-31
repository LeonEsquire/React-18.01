import React from 'react';


class MenuItem extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li>
                <a href={this.props.href}>{this.props.title}</a>
            </li>
        );
    }
}


export default MenuItem;