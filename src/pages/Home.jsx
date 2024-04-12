import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
import { dummyData } from "../utils/fetchData";
import EmployeeCard from "../components/EmployeeCard";
import Sort from "../components/Sort";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState('');
    
    const filteredUsers = users.filter(user => {        

        const fullName = `${user.firstName} ${user.lastName}`;

        return fullName.toLowerCase().includes(searchQuery.toLowerCase())
        && user.company.department.includes(filterQuery)
        ? true : false;

    })

    useEffect(() => {
        // fetchData('https://dummyjson.com/users', setUsers)
        setUsers(dummyData);
    }, [])


    return (
        <>
        <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl text-center my-3 mb-5">Employee Directory</h1>
        <SearchBar setSearchQuery={setSearchQuery}/>
        <Sort userData={users} setFilterQuery={setFilterQuery} filterQuery={filterQuery}/>
        <div className="py-5 mx-auto w-full grid grid-cols-responsive gap-3 place-items-center">
            {filteredUsers.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </div>
        </>
    )
}