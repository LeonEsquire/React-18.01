import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from './User';

export default props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/').then(response => {
            setUsers(response.data);
        });
    }, []);

    if(!users.length) {
        return null;
    }

    return <div>
        <h1>Пользователи</h1>
        {users.map((user, index) => {
            return <User key={index} {...user} />
        })}
    </div>;
};