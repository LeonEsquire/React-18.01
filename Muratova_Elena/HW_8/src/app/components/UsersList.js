import React, {useState, useEffect} from "react";
import axios from "axios";
import User from "./User";

const UsersList = props => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                setUsers(response.data)
            });
    },[]);

    const usersView = users.map((user, index) => {
        return <User key={index} {...user} />
    });

    return(
        <div>
            <h1>Пользователи</h1>
            {usersView}
        </div>
    );
}

export default UsersList;