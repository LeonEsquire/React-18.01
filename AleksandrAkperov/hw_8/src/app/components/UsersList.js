import React, {useState, useEffect} from 'react';
import axios from 'axios';




const UserList = props =>{

    const [users, setUsers] = useState([]);



    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const Data = response.data;
            const userList = [];
            for (const key in Data) {
                userList.push(Data[key].name);
            }
        });
        setUsers(userList);

    }, []);

    return(
        <div>
            <ul>
                {}
            </ul>
        </div>
    )



  }




export  default UserList;


