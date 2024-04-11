import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { dummyData } from "../utils/fetchData";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetchData('https://dummyjson.com/users', setUsers)
        setUsers(dummyData);
    }, [])


    return (
        <>
        <h1>Employee Directory</h1>
        {users.map((user) => (
            <p key={user.id}>{user.firstName}</p>
        ))}
        </>
    )
}