import React from "react";

export default class Menu extends React.Component {
  render() {
    let items = this.props.items.map(item => {
      return (
        <li>
          <a href={item.href}>{item.title}</a>
        </li>
      );
    });

    return (
      <nav className="nav">
        <ul className="menu">{items}</ul>
      </nav>
    );
  }
}
