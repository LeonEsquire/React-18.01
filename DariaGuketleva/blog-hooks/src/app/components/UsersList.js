import React, { useState, useEffect } from "react";
import axios from 'axios';
import User from './User';

const UsersList =props=>{
    const [users, setUsers] = useState([]);
useEffect(()=>{
    axios.get('https://todolist-4b12c.firebaseio.com/users.json')
    .then(response => {
        setUsers(response.data)
    });

    return () => {
        console.log('cleanup')
    };
},[]);

        if (!users.length) {
            return null;
        }

        const userBlocks= users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {userBlocks}
            </div>
        );
};

export default UsersList;