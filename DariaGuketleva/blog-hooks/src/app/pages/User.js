import React, {useState, useEffect} from "react";
import UserProfile from '../components/User';
import axios from 'axios';

const User = props => {
    const [user, setUser] = useState({});
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${props.params.userId}`)
        .then(response => {
            setUser(response.data)
        });
    return () => {
        console.log('cleanup')
    };
},[]);


    return (
        <div>
            {user && <UserProfile {...user}/>}
        </div>
    );
};
export default User;