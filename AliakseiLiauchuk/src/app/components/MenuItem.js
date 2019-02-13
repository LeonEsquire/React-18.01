import React from 'react';
import {Link} from 'react-router-dom';

// {`nav-item ${this.props.active && 'active'}`}

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
        <Link className="nav-link" to={this.props.href}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}