import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Message extends Component {

    static STYLE_PRIMARY = 'primary';
    static STYLE_SECONDARY = 'secondary';
    static STYLE_SUCCESS = 'success';
    static STYLE_DANGER = 'danger';
    static STYLE_WARNING = 'warning';
    static STYLE_INFO = 'info';
    static STYLE_LIGHT = 'light';
    static STYLE_DARK = 'dark';

    static defaultProps = {
        title: '',
        style: Message.STYLE_PRIMARY,
        dismissible: false
    };

    state = {
        hidden: false
    };

    show = () => {
        this.setState({
            hidden: false
        });
    };

    hide = () => {
        this.setState({
            hidden: true
        });
    };

    onClose = (event) => {
        event.preventDefault();

        this.hide();
    };

    render(){
        return <div className={ClassNames(`alert fade`, {
            [`alert-${this.props.style}`]: this.props.style,
            'show': !this.state.hidden,
            'alert-dismissible': this.props.dismissible
        })} role="alert">
            {this.props.title ? <p className="alert-heading h3">{this.props.title}</p> : ''}
            {this.props.children}
            {this.props.dismissible ? <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onClose}>
                <span aria-hidden="true">&times;</span>
            </button> : ''}
        </div>;
    }
}