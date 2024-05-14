import { GroupContext } from "../../App"
import { useContext } from "react"
import GroupCard from "./GroupCard";
import BackArrow from "../../global-components/UI/BackArrow";

export default function AllGroups() {
    const {groups} = useContext(GroupContext);
    
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <BackArrow/>
            {
                groups.length > 0 ? (
                    <>
                    <h1 className="text-3xl mb-4">Your Groups</h1>
                    <div className="grid grid-cols-responsiveMd gap-3">
                        {groups.map((groupData) => (
                            <GroupCard groupData={groupData} key={groupData.groupId}/>
                        ))}
                    </div>
                    </>
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