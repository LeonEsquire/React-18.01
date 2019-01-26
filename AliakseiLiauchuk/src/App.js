import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

class App extends React.Component {
    render() {
        return <LoginForm />
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));