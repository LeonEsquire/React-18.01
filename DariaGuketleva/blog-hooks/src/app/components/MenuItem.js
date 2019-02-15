import React from 'react';
import {Link} from 'react-router';

// {`nav-item ${this.props.active && 'active'}`}

 const MenuItem= props=> {
        return (
            <li className={props.active ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={props.href}>
                    {props.children}
                </Link>
            </li>
        );
};
export default MenuItem