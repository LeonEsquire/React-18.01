import React from 'react';

export default class LifeCycleUnmount extends React.Component {

    render() {
        return (
            <>
               Лиш компонент
            </>
        );
    }


    componentDidMount(){
        console.log('componentDidMount()');
    }

    componentWillUnmount()
    {
        console.log('1. componentWillUnmount()')
    }
}