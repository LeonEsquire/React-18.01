import React, {useEffect, useState} from 'react';
import UserProfile from '../components/User';
import axios from 'axios';

export default props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.match.params.userId}`).then(response => {
            setUser(response.data);
        });

        return () => {
            setUser(null);
        };
    }, []);

    return <div>
        {user && <UserProfile {...user}/>}
    </div>;
};