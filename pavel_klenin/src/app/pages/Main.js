import React from 'react';
import Developer from '../components/Developer';

import style from '../style/Main.css';

class Main extends React.Component {
    render () {
        const developer = new Developer();

        return (
            <div>
                <h1 className={style.mainTitle}>Homework 7 (Redux)</h1>
                <p>Resources: <a href="http://jsonplaceholder.typicode.com">JSONPlaceholder</a></p>
                <p>ReactJS project</p>
                <p>Developer: {developer.name}</p>
            </div>
        );
    }
}

export default Main;