import React from 'react';

export default class LifeCycleMount extends React.Component {
    constructor(props) {
        super(props);
        console.log('1. constructor(props)');
        this.state = {
            display: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps(props, state)')
        return {
            test: []
        };
    }

    render() {
        console.log('3. render()');
        return (
            <div>
                Это LifeCycleMount
            </div>
        );
    }

    componentDidMount(){
        console.log('4. componentDidMount()');
    }
}