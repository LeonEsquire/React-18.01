import React, { useState, useEffect } from 'react';
import axios from "axios";





const Todo = props => {
    //const [todoName, setText] = useState('');
    //const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://hw8-version2.firebaseio.com/todos.json')
            .then(result => {console.log(result)});
    });

    const [todoState, setTodoState] = useState({userInput:'', todoList: []})


    const inputChangeHandler = (event) => {
        setTodoState({
            userInput: event.target.value,
            todoList: todoState.todoList
        })
    };



    const todoAddHandler = () => {
        setTodoState({
            userInput: todoState.userInput,
            todoList: [...todoState.todoList, todoState.userInput]
        });

        axios.post('https://hw8-version2.firebaseio.com/todos.json', {name:todoState.userInput})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };
    
    
    return(
        <div>
            <input 
                type = "text" 
                placeholder = "Todo" 
                onChange={inputChangeHandler}
                value={todoState.userInput}  
                />    
            <button onClick={todoAddHandler}>Add</button>
            <ul>
                {todoState.todoList.map(todo => <li key={todo}>{todo}</li> )}
            </ul>
        </div>
    );
}

export default Todo 