import { useState, useEffect, createContext, useContext } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Sort from "../components/Sort";
import SearchBar from "../components/SearchBar";
import CircularProgress from "@mui/material/CircularProgress";
import GroupIcon from "../components/GroupIcon";
import { UserContext } from "../App";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const {users} = useContext(UserContext);
  const {isLoading} = useContext(UserContext);
  

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;


    return fullName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      user.company.department.includes(filterQuery)
      ? true
      : false;
  });


  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="text-3xl text-center my-3 mb-5">Employee Directory</h1>
        
        <SearchBar setSearchQuery={setSearchQuery} />
        
        <Sort
          userData={users}
          setFilterQuery={setFilterQuery}
          filterQuery={filterQuery}
        />

        <div className="flex justify-end">
          <GroupIcon/>
        </div>

        {isLoading && (
          <div className="flex justify-center my-6">
            <CircularProgress />
          </div>
        )}
        <div className="py-5 mx-auto w-full grid grid-cols-responsiveMd gap-3 place-items-center">
          {filteredUsers.map((user) => (
            <EmployeeCard key={user.id} userData={user} />
          ))}
        </div>
      </div>
    </>
  );
}
