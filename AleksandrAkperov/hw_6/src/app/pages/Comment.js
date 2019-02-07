import React from 'react';
import Commentprofile from '../components/Comment';
import  axios from 'axios';


export default class Comment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comment: null
        }


    }


    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
            .then(response => {
                this.setState({comment: response.data})
            });

    }



    render() {
        return (
            <div>
                {this.state.comment && <Commentprofile {...this.state.comment}/>}
            </div>
        )
    }
}