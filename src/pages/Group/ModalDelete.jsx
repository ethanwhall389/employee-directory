import { GroupContext } from "../../App"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

export default function ModalDelete({group}) {
    const {groups, setGroups} = useContext(GroupContext);
    const navigate = useNavigate();

    function onDelete() {
        const newGroups = groups.filter(eachGroup => (
            eachGroup !== group 
        ))
        navigate('/groups');
        setGroups(newGroups);
    }


    return (
        <>
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-lg">Are you sure you want to delete "{group.groupName}"?</h1>
                <p>This action cannot be undone</p>
            <button onClick={onDelete} className='bg-blue-300 p-2 px-4 mt-6 rounded-full w-full'>Yes, delete</button>
            </div>
        </div>
        </>
    )
}