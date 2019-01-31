import React from 'react';

export default class LifeCycleUpdate extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor(props)');
        this.state = {count: 0};
    }

    static getDerivedStateFromProps(props, state) {
        console.log('1. getDerivedStateFromProps(props, state)')
        return null;
    }

    shouldComponentUpdate()
    {
        console.log('2. shouldComponentUpdate()');
        return true;
    }

    render() {
        console.log('3. render()');
        return (
            <>
                {this.state.count}
                <button onClick={() => {this.setState({count: this.state.count + 1})}}>
                    Увеличить счетчик
                </button>
            </>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('4. getSnapshotBeforeUpdate(prevProps, prevState)');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('5. componentDidUpdate()');
    }
}