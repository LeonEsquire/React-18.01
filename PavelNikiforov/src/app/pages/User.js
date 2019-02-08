import React from 'react'
import UserProfile from '../components/User'
import axios from 'axios'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
        .then(response => {
            this.setState({user: response.data})
        })
    }

    render() {
        return (
            <>
                {this.state.user && <UserProfile {...this.state.user}/>}
            </>
        )
    }
}

export default User