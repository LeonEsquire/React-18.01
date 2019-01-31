import React from 'react';

import styles from './Login.css';


class Login extends React.Component {
    render () {
        return ( 
            <form className={styles.loginForm}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <div className={styles.login}>
                        <label htmlFor="login">Логин</label>
                        <input id="login" type="text"/>
                    </div>
                    <div className = {styles.password}>
                        <label htmlFor="password">Пароль</label>
                        <input id="password" type="password"/>
                    </div>
                    <input className={styles.submitBtn} type="submit" value="Войти"/>
                </fieldset>
            </form>
        );
    }
}

export default Login;