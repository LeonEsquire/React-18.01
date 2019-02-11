import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ClassNames from "classnames";

import 'bootstrap/scss/bootstrap.scss';

export default class Default extends Component {

    static defaultProps = {
        course: '',
        task: '',
        menu: []
    };

    render(){
        return <main className="main container my-3">
            <header className="header my-3">
                <h1 className="h1">{this.props.course}</h1>
                <h2 className="h2">{this.props.task}</h2>
            </header>
            <div className="content my-3">

                <nav className="my-4">
                    <ul className="nav nav-pills">
                        {this.props.menu.map((item, i) => {
                            return <li key={i} className="nav-item">
                                <NavLink exact className={ClassNames('nav-link', {
                                    'disabled': item.disabled
                                })} activeClassName='active' to={item.path}>{item.title}</NavLink>
                            </li>;
                        })}
                    </ul>
                </nav>

                {this.props.children}

            </div>
            <footer className="footer my-3">

            </footer>
        </main>;
    }
}