import React, {Component, Fragment} from 'react';
import ClassNames from 'classnames';

export default class Form extends Component {

    static INPUT_TYPE_HIDDEN = 'hidden';
    static INPUT_TYPE_TEXT = 'text';
    static INPUT_TYPE_TEXTAREA = 'textarea';

    static BUTTON_TYPE_SUBMIT = 'submit';

    static BUTTON_STYLE_PRIMARY = 'primary';
    static BUTTON_STYLE_SECONDARY = 'secondary';
    static BUTTON_STYLE_SUCCESS = 'success';
    static BUTTON_STYLE_DANGER = 'danger';
    static BUTTON_STYLE_WARNING = 'warning';
    static BUTTON_STYLE_INFO = 'info';
    static BUTTON_STYLE_LIGHT = 'light';
    static BUTTON_STYLE_DARK = 'dark';
    static BUTTON_STYLE_LINK = 'link';

    static defaultProps = {
        inputs: [],
        buttons: [],
        onChange: null,
        onSubmit: null,
        reset: true
    };

    state = {

    };

    constructor(...args){
        super(...args);

        this.state = this.getInitialState();

        this.form = React.createRef();
    }

    getInitialState(){
        let state = {};

        for(let input of this.props.inputs){
            state[input.id] = input.value ? input.value : '';
        }

        return state;
    }

    onChange = event => {
        let changed = {
            [event.target.name]: event.target.value
        };

        if(this.props.onChange)
            this.props.onChange(changed);

        this.setState(changed);
    };

    onSubmit = event => {
        event.preventDefault();

        if(this.form.current.reportValidity()){
            if(this.props.onSubmit)
                this.props.onSubmit(this.state);

            if(this.props.reset)
                this.setState(this.getInitialState);
        }
    };

    render(){
        return <form ref={this.form} className="my-4" onSubmit={this.onSubmit}>
            {this.props.inputs.map((input, i) => {
                let block,
                    {value, label, ...inputProps} = input;

                value = this.state[inputProps.id];

                switch(inputProps.type){
                    case Form.INPUT_TYPE_HIDDEN:
                        block = <input className="form-control" {...inputProps} name={inputProps.id} value={value} />;
                        break;
                    case Form.INPUT_TYPE_TEXTAREA:
                        block = <textarea className="form-control" {...inputProps} name={inputProps.id} value={value} onChange={this.onChange} />;
                        break;
                    case Form.INPUT_TYPE_TEXT:
                    default:
                        block = <input className="form-control" {...inputProps} name={inputProps.id} value={value} onChange={this.onChange} />;
                        break;
                }

                return <Fragment key={inputProps.id}>
                    {inputProps.type === Form.INPUT_TYPE_HIDDEN ? block : <div className="form-group">
                        <label htmlFor={inputProps.id}>{label}</label>
                        {block}
                    </div>}
                </Fragment>;
            })}
            {this.props.buttons.map((button, i) => {
                let {content, style, ...buttonProps} = button;

                return <button key={i} className={ClassNames('btn', {
                    [`btn-${style}`]: style
                })} {...buttonProps}>{content}</button>;
            })}
        </form>;
    }

}