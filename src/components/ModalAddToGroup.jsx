import { useEffect, useState } from "react"
import SelectGroup from "./SelectGroup";

export default function ModalAddToGroup({groups, userData}) {
    const [userGroups, setUserGroups] = useState([]);

    function addGroupId(id) {
        setUserGroups((prev) => ([
            ...prev,
            id
        ]))
    }

    function removeGroupId(id) {
        const newUserGroups = [];
        userGroups.forEach((group) => {
            if (group.groupId !== id) {
                newUserGroups.push(group.groupId);
            }
        })
        // const newUserGroups = userGroups.filter((group) => group.groupId !== id);
        console.log(`new user groups:`);
        console.log(newUserGroups);
        setUserGroups(newUserGroups);
    }

    function onSelectGroup(isChecked, groupId) {
        console.log('clicked');
        console.log(isChecked);
        if (!isChecked) {
            addGroupId(groupId);
        } else if (isChecked) {
            removeGroupId(groupId);
        }
    }

    useEffect(() => {
        const groupIds = []
        groups.forEach((group) => {
            group.groupUserIds.includes(userData.id) ?
            groupIds.push(group.groupId) : null
        })
        setUserGroups(groupIds);
    }, [])

    return (
        <>
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-lg">{userData.firstName}'s groups</h1>
                <div>
                    {groups.map( (groupData) => (
                        <SelectGroup key={groupData.groupId} groupData={groupData} userGroups={userGroups} onSelectGroup={onSelectGroup}/>
                    ))}
                </div>
            <button className='bg-blue-300 p-2 px-4 mt-6 rounded-full w-full'>Yes, delete</button>
            </div>
        </div>
        </>
    )
}