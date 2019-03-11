import React from 'react';
import {Link} from 'react-router';


const Menu = props =>(
    <nav>
        <div>
            <Link to="/"> {props.brand}</Link>
            <div>
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    </nav>
);

export  default Menu;


