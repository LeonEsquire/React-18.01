import React from 'react';

class Login extends React.Component {
    render() {
        return <div id='loginForm'>
            <form>
                <p><label><input type='text'/>Enter username</label></p>
                <p><label><input type='password' />Enter password</label></p>
                <button type='submit'>Log in</button>
            </form>
            </div>
        
    }
}

export default Login;