import React from 'react'

export default class Menu extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">{this.props.brand}</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    }
}