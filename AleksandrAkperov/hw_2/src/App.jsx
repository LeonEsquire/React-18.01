import React from 'react';
import DevelopOne from './Developer'

const text= DevelopOne.text;


class App extends React.Component {
    render(){
        return <div>
            <h1>Первое приложение на React</h1>
            <h2>Hello React</h2>
            <h3>text</h3> {/*Хотел передать текст из DevelopOne, но это делается через props, а эта тема
            уже 3 урока. Поэтому просто вывод здесь просто вывод "text"*/}
        </div>

    }
}

export default App;




