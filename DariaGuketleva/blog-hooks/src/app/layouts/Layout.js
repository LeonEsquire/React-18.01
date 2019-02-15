import React, {useState} from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import '../styles/style.css'
const Layout = props => {
    const [brand, setBrand] = useState("React blog!");

    const isActive = href => {
        return window.location.pathname === href;
    };

        return <div>
            <Menu brand={brand}>
                <MenuItem href="/" active={isActive('/')}>
                    Главная
                </MenuItem>
                <MenuItem href="/users" active={isActive('/users')}>
                    Пользователи
                </MenuItem>
                <MenuItem href="/posts" active={isActive('/posts')}>
                    Cтатьи
                </MenuItem>
                <MenuItem href="/comments" active={isActive('/comments')}>
                    Комментарии
                </MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                &copy; 2019
            </footer>
        </div>
};

export default Layout;