import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import {fetchUsers} from '../actions/usersActions';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.brand = 'React blog!';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>
                        Главная
                    </MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>
                        Пользователи
                    </MenuItem>
                </Menu>
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

function mapStateToProps (state) {
    return {
        // user: state.user.user,
        // userFetched: state.user.fetched,
        users: state.users.users
    };
}

export default connect(mapStateToProps)(Layout);