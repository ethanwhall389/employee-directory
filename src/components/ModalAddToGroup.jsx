import { useContext, useEffect, useState } from "react"
import { GroupContext } from "../App"
import SelectGroup from "./SelectGroup";
import NewGroup from "./NewGroup";

export default function ModalAddToGroup({userData}) {

    const {groups} = useContext(GroupContext);
    const {setGroups} = useContext(GroupContext);

    const [message, setMessage] = useState(null);

    function showMessage(message) {
        setMessage(message);
        setTimeout(() => {
            setMessage(null);
        }, 3000);
    }

    function addToGroup(userId, groupId) {
        groups.forEach((group) => {
            if (group.groupId === groupId) {
                
                if (group.groupUserIds.includes(userId)) {
                    showMessage(`This employee is already in ${group.groupName}`);
                } else {
                    const index = groups.indexOf(group);
                    const updatedGroups = groups;
                    updatedGroups[index].groupUserIds.push(userId);
            
                    setGroups(updatedGroups);

                    showMessage(`Employee sucessfully added to ${group.groupName}`);
                }

            }
        })
    }


    return (
        <>
        
        
        <div className="h-full flex flex-col items-center justify-center gap-4">
            {groups.length > 0 ?  
                <div className="flex flex-col items-center gap-2">
                    {message ? 
                        <div>
                            <p>{message}</p>
                        </div>
                    : null
                    }
                    <h1 className="text-xl">Add {userData.firstName} to groups</h1>
                    <div className="flex flex-col gap-2">
                        {groups.map( (groupData) => (
                            <SelectGroup key={groupData.groupId} groupData={groupData} userData={userData} addToGroup={addToGroup}/>
                        ))}
                    </div>
                </div>
                : 
                <h1 className="text-2xl">You do not have any groups. Create one below.</h1>
            }

            <NewGroup />
        </div>
        </>
    )
}