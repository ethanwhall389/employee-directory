import { useContext, useState } from "react"
import { GroupContext } from "../../App"
import Group from "../../utils/Group";

export default function NewGroup() {

    const {groups, setGroups} = useContext(GroupContext);
    const [input, setInput] = useState('');

    function handleClick() {

        if (input !== '') {
            const maxId = groups.reduce((max, group) => Math.max(max, group.groupId), -1);
            const newGroup = new Group(maxId+1, input);
    
            setGroups((prev) => ([
                ...prev,
                newGroup
            ]))
    
            setInput('');
        }
    }

    return (
        <div className="flex gap-2">
            <input type="text" className="border-2 border-blue-300 p-1" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleClick} className='bg-blue-300 p-2 px-4 rounded-full w-full'>Create Group</button>
        </div>
    )
}