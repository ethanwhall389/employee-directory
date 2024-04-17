import { Outlet } from "react-router-dom"
import { useState, createContext, useEffect } from "react"
import fetchData from "./utils/fetchData";
import { dummyData } from "./utils/fetchData";

export const GroupContext = createContext(null);
export const UserContext = createContext(null);

function App() {

  const [groups, setGroups] = useState([
    {
      groupId: 0,
      groupName: 'April 1st sales team',
      groupUserIds: [
        1, 2
      ]
    },
    {
      groupId: 1,
      groupName: 'Party Planning Committee',
      groupUserIds: [
        3, 4, 15, 18, 21
      ]
    }
  ]);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      // const data = await fetchData("https://dummyjson.com/users", setIsLoading);
      // setUsers(data.users);
      setUsers(dummyData);
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
