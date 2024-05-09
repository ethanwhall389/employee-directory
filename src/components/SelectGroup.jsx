import AddToGroup from "../components/AddToGroup";


export default function SelectGroup({groupData, userData, addToGroup}) {

    function handleClick() {
        addToGroup(userData.id, groupData.groupId)
    }

    return (
        <div className="border-2 border-black p-2 rounded-lg">
            <div className="flex gap-2 justify-between">
                <h2 className="text-lg">{groupData.groupName}</h2>
                <AddToGroup size={'medium'} onOpen={handleClick}/>
            </div>
        </div>
    )
}