import React, {Component} from 'react';

export default class Menu extends Component {

    static defaultProps = {
        url: '/',
        menu: []
    };

    render() {
        return <ul className="nav">
            {this.props.data.map((item, i) => {
                return <li key={i} className="nav-item">
                    <a className={`nav-link ${item.link === this.props.url ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`} href={item.link} title={item.title}>{item.title}</a>
                </li>;
            })}
        </ul>;
    }

}