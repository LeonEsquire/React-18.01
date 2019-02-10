import React from 'react';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modal: false,
        };
    }

    closeModal() {
        this.setState({modal: false})
    }

    render() {
        let modaStyles =   {
            display: this.state.modal ? "flex" : "none",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: '#d6d6d6eb',
        };

        return (<div style={modaStyles}>
            <div className="modalTextStyle">
                <h4>Modal title</h4>
                <p>Considered discovered ye sentiments projecting entreaties of melancholy is. Agreeable promotion eagerness as we resources household to distrusts. Dissimilar admiration so terminated no in contrasted it.</p>
            </div>
            <button className="modalButtonStyle" type="button" onClick={this.closeModal}>
                CLOSE
            </button>
        </div>
        )
    }

    componentDidMount() {
        this.setState({modal: true});
      }
}

export default WelcomeModal; 