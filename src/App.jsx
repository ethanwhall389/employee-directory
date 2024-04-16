import { Outlet } from "react-router-dom"
import { useState, createContext } from "react"

export const GroupContext = createContext(null);

function App() {

  const [groups, setGroups] = useState([
    {
      groupID: 0,
      groupName: 'April 1st sales team',
      groupUserIds: [
        0, 4, 5, 10, 20
      ]
    },
    {
      groupID: 1,
      groupName: 'Party Planning Committee',
      groupUserIds: [
        3, 4, 15, 18, 21
      ]
    }
  ]);

  return (
    <GroupContext.Provider value={{groups, setGroups}}>
    <div className="p-5 font-oswald">
      <Outlet />
    </div>
    </GroupContext.Provider>
  )

}

export default App
