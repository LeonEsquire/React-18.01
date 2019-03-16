<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router';

export default class User extends React.Component {
    render() {
        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/users/${this.props.id}`}>
                        {this.props.username}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </div>
            </div>
        );
    }
}
=======
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router'




const User= props =>{
    return (
        <div className="card border-secondary mb-3">
            <div className="card-header">
                <Link to={`/users/${props.id}`}> {props.username} </Link>
            </div>
                <div className="card-body text-secondary" >
                    <p>{props.name}</p>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                    <p>{props.website}</p>
                </div>
         </div>


    )



};




export  default User;


>>>>>>> hw_9
