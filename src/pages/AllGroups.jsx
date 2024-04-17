import { GroupContext } from "../App"
import { useContext } from "react"
import GroupCard from "../components/GroupCard";

export default function AllGroups() {
    const {groups} = useContext(GroupContext);
    
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {
                groups.length > 0 ? (
                    <div className="grid grid-cols-responsiveLg gap-3">
                        {groups.map((groupData) => (
                            <GroupCard groupData={groupData} key={groupData.groupId}/>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col h-screen justify-center items-center">
                        <h1 className="text-2xl">You currently have no groups.</h1>
                        <h2 className="text-lg">Click the "add to group" button on an employee to see them here.</h2>
                    </div>
                )
            }
        </div>
    )
}