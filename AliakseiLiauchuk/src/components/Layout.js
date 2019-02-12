import React from 'react';

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
                <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
                  <a className="nav-link" href="/users">Пользователи</a>
                </li>
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