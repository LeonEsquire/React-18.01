import React from 'react';
import MenuItem from './MenuItem'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = 'React blog!';
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a href="/" className="navbar-brand">{this.props.brand}</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <MenuItem href="/" active={this.isActive('/')}>
                  Главная
                </MenuItem>
                <MenuItem href="/users" active={this.isActive('/users')}>
                  Пользователи
                </MenuItem>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </div>
    );
  }
}