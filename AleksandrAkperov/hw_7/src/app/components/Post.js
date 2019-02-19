import React from 'react';
import {Link} from 'react-router';
import { deletePost } from '../actions/postAction';

export default class  Post extends React.Component {
   

    render() {
        
        console.log(this)
        return (
            <div>
                <div className="card border-secondary mb-3">
                    <div className="card-header">
                        {this.props.title} 
                    </div>
                    <div className="card-body text-secondary">
                        <p> {this.props.body} </p>
                    </div>  
                    <button className="btn btn-primary" onClick={this.props.del} >Удалить</button>  
                    
                </div>
                
            </div>
        )
    }
}