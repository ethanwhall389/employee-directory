import { Outlet } from "react-router-dom"
import { useState, createContext, useEffect } from "react"
import fetchData from "./utils/fetchData";
import { dummyData } from "./utils/fetchData";

export const GroupContext = createContext(null);
export const UserContext = createContext(null);

function App() {

  const [groups, setGroups] = useState([]);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await fetchData("https://dummyjson.com/users", setIsLoading);
      setUsers(data.users);
      // setUsers(dummyData);
    }
    getData();
    }, []);

  return (
    <UserContext.Provider value={{users, setUsers, isLoading}}>
    <GroupContext.Provider value={{groups, setGroups}}>
      <div className="p-5 font-oswald">
        <Outlet />
      </div>
    </GroupContext.Provider>
    </UserContext.Provider>
  )

}

export default App
