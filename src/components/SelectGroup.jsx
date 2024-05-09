import { useEffect, useState } from "react"

export default function SelectGroup({groupData, userGroups, onSelectGroup}) {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        console.log(userGroups);
        userGroups.includes(groupData.groupId) ? setIsChecked(true) : setIsChecked(false);
    }, [userGroups])


    return (
        <div>
            <div className="flex gap-2">
                    <input type="checkbox" checked={isChecked} onChange={() => onSelectGroup(isChecked, groupData.groupId)}/>
                <h2>{groupData.groupName}</h2>
            </div>
        </div>
    )
}