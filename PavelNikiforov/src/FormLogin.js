import React from 'react'

class FormLogin extends React.Component {
    render() {
        return (
            <form className="form__login">
                <label htmlFor="" className="form__label">
                    <span className="form__label_text">Login:</span>
                    <input type="text" className="form__input"/>
                </label>
                <label htmlFor="" className="form__label">
                    <span className="form__label_text">Password:</span>
                    <input type="password" className="form__input"/>
                </label>
                <input type="submit" value="OK" className="form__submit"/>
            </form>
        )
    }
}

export default FormLogin