import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { dummyData } from "../utils/fetchData";
import EmployeeCard from "../components/EmployeeCard";
import Sort from "../components/Sort";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetchData('https://dummyjson.com/users', setUsers)
        setUsers(dummyData);
    }, [])


    return (
        <>
        <h1>Employee Directory</h1>
        <Sort userData={users}/>
        <div className="mx-auto max-w-screen-xl grid grid-cols-responsive gap-3 place-items-center">
            {users.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </>
    )
}