import React, { useEffect, useState } from 'react'
import UserCardForm from '../UserCardForm/UserCardForm'
import UserCardData from '../UserCardData/UserCardData';

export default function UserCard({ user, index }) {
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        console.log(user.data);
        setShowForm((prevState) => user.data && Object.keys(user.data).length ? false : true);
    }, [user.data]);

    return <div className="card">
        {showForm ? <UserCardForm user={user} index={index} /> : <UserCardData user={user}/>}


    </div>
}
