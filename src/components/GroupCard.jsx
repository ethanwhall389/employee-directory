import GroupsIcon from '@mui/icons-material/Groups';


export default function GroupCard({groupData}) {
    return (
        <div className="border-box border-2 rounded-md w-full flex justify-between gap-2 h-36 items-center p-6 overflow-hidden">
            <div className='flex items-center gap-4'>
                <GroupsIcon fontSize='large'/>
                <h1>{groupData.groupName}</h1>
            </div>
            <p>{groupData.groupUserIds.length} employees</p>
        </div>
    )
}