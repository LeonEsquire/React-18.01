import React from 'react';
import {Link} from 'react-router';


const MenuItem = props =>(



    <li className={props.active ? 'nav-item active' : 'nav-item'}>
        <Link to={props.href}> {props.children}</Link>
    </li>
);

export  default MenuItem;


