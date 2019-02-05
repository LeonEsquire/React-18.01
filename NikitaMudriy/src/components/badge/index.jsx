import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Badge extends Component {

    static TYPE_PILL = 'pill';

    static STYLE_PRIMARY = 'primary';
    static STYLE_SECONDARY = 'secondary';
    static STYLE_SUCCESS = 'success';
    static STYLE_DANGER = 'danger';
    static STYLE_WARNING = 'warning';
    static STYLE_INFO = 'info';
    static STYLE_LIGHT = 'light';
    static STYLE_DARK = 'dark';

    static defaultProps = {
        type: '',
        style: ''
    };

    render(){
        return <span className={ClassNames('badge', {
            [`badge-${this.props.type}`]: this.props.type,
            [`badge-${this.props.style}`]: this.props.style
        })}>{this.props.children}</span>;
    }
}