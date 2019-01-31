import React, {Component} from 'react';

export default class Login extends Component {

    static defaultProps = {
        user: false,
        onAuth: (user) => {}
    };

    onSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.target);

        this.props.onAuth({
            email: data.get('email'),
            name: data.get('name')
        });
    };

    render() {
        return <form className="mt-5" onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" className="form-control" type="email" placeholder="Enter email" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>;
    }

}