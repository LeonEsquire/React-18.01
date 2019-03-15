import React, {useState, useEffect} from 'react';
import axios from 'axios';
import User from "./User";




const UsersList = props =>{

    const [users, setUsers] = useState([]);
    console.log(users);



    useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const Data = response.data;
            const userList = [];
            for (const key in Data) {
                userList.push(Data[key]);
            }
            setUsers(userList);
        });

    }, []);

    return(
        <div>
            <ul>
                {users.map((user, index) => (
                    <User key={index} {...user} />
                ))}
            </ul>
        </div>
    )



  };




export  default UsersList;


