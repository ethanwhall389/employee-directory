import { useEffect, useState, useContext } from "react"

export default function SelectGroup({groupData, userData, addToGroup}) {

    function handleClick() {
        addToGroup(userData.id, groupData.groupId)
    }

    return (
        <div>
            <div className="flex gap-2">
                <h2>{groupData.groupName}</h2>
                <button onClick={handleClick}>Add to group</button>
            </div>
        </div>
    )
}