import React, {Component} from 'react';

export default class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };

        this.handleClickButton = this.handleClickButton.bind(this);
    }

    handleClickButton() {
        console.log('handled clic');
        this.setState({display: false});
    };


    componentDidMount() {
        this.setState({display: true});
    }

    render() {
        // let style = this.state.display === true ? 'display: block' : 'display: none';
        // console.log(style);

        if (this.state.display === true) {
            return <div className="modal-window-wrapper mt-5">
                <div className="modal-window__window">
                    <p className="modal-window__text">some text will appear here some text will appear here some text
                        will
                        appear here some text will appear here some text will appear here some text will appear here
                        some
                        text will appear here some text will appear here </p>
                    <button className=' btn-default btn btn-lg btn-dark' onClick={this.handleClickButton}>Close me
                    </button>
                </div>
            </div>;
        } else {
            return <></>;
        }

    }
}