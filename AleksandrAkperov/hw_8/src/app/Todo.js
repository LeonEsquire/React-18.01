import React, { useState, useEffect } from 'react';
import axios from "axios";


const Todo = props => {
    //const [todoName, setText] = useState('');
    //const [todoList, setTodoList] = useState([]);
    const [todoState, setTodoState] = useState({userInput:'', todoList: []});
    useEffect(() => {
        axios.get('https://hw8-version2.firebaseio.com/todos.json')
            .then(result =>
              {console.log(result);
                  const todoData = result.data;
                  for (const key in todoData) {
                      todoState.todoList.push({id: key, name: todoData[key].name})

                  }

                  setTodoState({todoList: todoState.todoList});


            });
        return () => {
            console.log('cleanup')
        }
    }, [] );

    const mouseMoveHandler = event => {
        console.log(event.clientX, event.clientY);
    };

    useEffect( ()=> {
        console.log('второй useEffect')

        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            console.log('mousemove удалился');
        }
    },[]);


    const inputChangeHandler = (event) => {
        console.log('Перед прорисовкой после ввода')
        setTodoState({
            userInput: event.target.value,
            todoList: todoState.todoList
        });

    };



    const todoAddHandler = () => {
        setTodoState({
            userInput: todoState.userInput,
            todoList: [...todoState.todoList, todoState.userInput]
        });
        console.log(todoState.todoList);
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
                {todoState.todoList.map(todo => (<li>{todo.name}</li> ) )}
            </ul>
        </div>
    );
};

export default Todo 