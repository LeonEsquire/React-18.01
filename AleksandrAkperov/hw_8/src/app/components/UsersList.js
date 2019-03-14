import React, {useState, useEffect} from 'react';
import axios from 'axios';




const UsersList = props =>{

    const [users, setUsers] = useState([]);
    console.log(users);



    useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const Data = response.data;
            const userList = [];
            for (const key in Data) {
                userList.push(Data[key].name);
            }
            setUsers(userList);
        });

    }, []);

    return(
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )



  };




export  default UsersList;


