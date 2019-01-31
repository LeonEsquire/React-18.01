import React, {Component} from 'react';

import Auth from 'auth';
import Menu from 'menu';

export default class App extends Component {

    static defaultProps = {
        url: '/',
        user: false,
        menu: []
    };

    render() {
        return <main className="main container my-3">
            <header className="header my-3">
                <h1 className="h1">ReactJS</h1>
                <h2 className="h2">Домашнее задание 3</h2>
            </header>
            <div className="content my-3">
                <Menu data={this.props.menu} url={this.props.url} />
                <Auth user={this.props.user} />
            </div>
            <footer className="footer my-3">

            </footer>
        </main>;
    }
}