import React from 'react';
import Postprofile from '../components/Post';
import  axios from 'axios';


export default class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            post: null
        }


    }




    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
            .then(response => {
                this.setState({post: response.data});

            });
    }

    render() {
        return (
            <div>
                {this.state.post && <Postprofile {...this.state.post}/>}
            </div>
        )
    }
}