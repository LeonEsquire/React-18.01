import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return <div className="form-fields-wrapper mt-5">
            <form>
                <div className="form-field">
                    <label>
                        Login:
                        <input type="text" placeholder={'Login'} name={'login'}/>
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Password:
                        <input type="text" placeholder={'Password'} name={'password'}/>
                    </label>
                </div>
                <input type="submit" value="Submit" className={' btn-default btn btn-lg btn-dark'}/>
            </form>
        </div>;
    }
}