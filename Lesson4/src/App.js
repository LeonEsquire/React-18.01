import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycleMount from './app/components/LifeCycleMount';
import LifeCycleUpdate from './app/components/LifeCycleUpdate';
import LifeCycleUnmount from './app/components/LifeCycleUnmount';

import './app/styles/style.css';

const app = document.querySelector('#root');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showUnmountComponent: true
        }
    }

    render(){
        return (<div>
            {this.state.showUnmountComponent ? <LifeCycleUnmount/> : null}
            <button onClick={()=>{
                this.setState({showUnmountComponent: false})
            }}>Удалить компонент</button>
        </div>);
    }
}

ReactDOM.render(<App/>, app);