import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function AddToGroup({size='large', onOpen}) {


    return (
        <div className="hover:cursor-pointer" onClick={() => onOpen()}>
            <GroupAddIcon fontSize={size} />
        </div>
    )
}