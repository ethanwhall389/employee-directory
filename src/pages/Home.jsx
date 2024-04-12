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
        if (
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.toLocaleLowerCase())
            &&
            user.company.department.includes(filterQuery)
        ) {
            return true;
        } else {
            return false;
        }
        // return user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
        // user.company.department.includes(filterQuery) ?
        // true : false;   

    })

    useEffect(() => {
        // fetchData('https://dummyjson.com/users', setUsers)
        setUsers(dummyData);
    }, [])


    return (
        <>
        <SearchBar setSearchQuery={setSearchQuery}/>
        <h1>Employee Directory</h1>
        <Sort userData={users} setFilterQuery={setFilterQuery} filterQuery={filterQuery}/>
        <div className="py-5 mx-auto max-w-screen-xl grid grid-cols-responsive gap-3 place-items-center">
            {filteredUsers.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </>
    )
}