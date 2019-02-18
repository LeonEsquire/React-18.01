import React from 'react';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';


import style from '../style/Layout.css';


class Layout extends React.Component {
    isActive(href) {
        return window.location.pathname === href;
    }

    render () {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <Menu>
                        <MenuItem href='/' active={this.isActive('/')}>
                            Main
                        </MenuItem>
                        <MenuItem href='/posts' active={this.isActive('/posts')}>
                            Posts
                        </MenuItem>
                        <MenuItem href='/comments' active={this.isActive('/comments')}>
                            Comments
                        </MenuItem>
                        <MenuItem href='/users' active={this.isActive('/users')}>
                            Users
                        </MenuItem>
                    </Menu>
                </div>
                <div className={style.content}>
                    {this.props.children}
                </div>
                <footer className={style.footer}>
                    &copy; 2019
                </footer>
            </div>
        );
    }
}

export default Layout;