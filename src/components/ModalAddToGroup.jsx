import { useContext, useEffect, useState } from "react"
import { GroupContext } from "../App"
import SelectGroup from "./SelectGroup";

export default function ModalAddToGroup({userData}) {

    const {groups} = useContext(GroupContext);
    const {setGroups} = useContext(GroupContext);

    //find the index of the group we want to change
    // create a copy of the entire groups array
    // go to the specific index, and push the new userid
    
    function addToGroup(userId, groupId) {
        groups.forEach((group) => {
            if (group.groupId === groupId) {
                
                if (group.groupUserIds.includes(userId)) {
                    alert(`This employee is already in ${group.groupName}`);
                } else {
                    const index = groups.indexOf(group);
                    const updatedGroups = groups;
                    updatedGroups[index].groupUserIds.push(userId);
            
                    setGroups(updatedGroups);
                }

            }
        })
    }
    
    // function addToGroup(userId) {
    //     groups.forEach((group) => {
    //         console.log(`group user ids: ${group.groupUserIds}`)
    //         console.log(`userId: ${userId}`);
    //         if (!group.groupUserIds.includes(userId)) {
    //             setGroups((prev) => ([
    //                 ...prev,
    //                 userId
    //             ]))
    //         } else {
    //             alert(`This employee is already in ${group.groupName}`);
    //             return;
    //         }
    //     })
    // }
    
        // const newUserGroups = userGroups.filter((group) => group.groupId !== id);


    return (
        <>
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-lg">{userData.firstName}'s groups</h1>
                <div>
                    {groups.map( (groupData) => (
                        <SelectGroup key={groupData.groupId} groupData={groupData} userData={userData} addToGroup={addToGroup}/>
                    ))}
                </div>
            <button className='bg-blue-300 p-2 px-4 mt-6 rounded-full w-full'>Yes, delete</button>
            </div>
        </div>
        </>
    )
}