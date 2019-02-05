import React, {Component} from 'react';
import {Link} from "react-router";
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
                                <Link className={ClassNames('nav-link', {
                                    'active': new RegExp(`^${item.path}/?$`, 'i').test(this.props.location.pathname),
                                    'disabled': item.disabled
                                })} to={item.path}>{item.title}</Link>
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