import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function AddToGroup({userData, onOpen}) {


    return (
        <div className="mt-4 hover:cursor-pointer" onClick={() => onOpen()}>
            <GroupAddIcon fontSize="large" />
        </div>
    )
}