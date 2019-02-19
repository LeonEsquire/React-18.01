import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link to="/" className="navbar-brand">{props.brand}</Link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
            </div>
        </div>
    </nav>;
};