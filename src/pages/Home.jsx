import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { dummyData } from "../utils/fetchData";
import EmployeeCard from "../components/EmployeeCard";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData('https://dummyjson.com/users', setUsers)
        // setUsers(dummyData);
    }, [])


    return (
        <>
        <h1>Employee Directory</h1>
        <div className="grid grid-cols-1 grid-flow-dense gap-3 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {users.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </>
    )
}