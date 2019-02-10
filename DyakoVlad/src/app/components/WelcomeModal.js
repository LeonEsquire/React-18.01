import React from 'react';

export default class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        let modal;
        if(this.state.modal) {
            modal  = alert("Hello there!")
        }
        return (
            <div>
                {modal}
            </div>
        )
    }

    componentDidMount() {
        this.setState({modal: true})
    }
}