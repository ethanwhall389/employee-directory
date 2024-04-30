import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function AddToGroup({userData}) {

    function handleClick() {
        console.log(userData);
    }

    return (
        <div className="mt-4 hover:cursor-pointer" onClick={handleClick}>
            <GroupAddIcon fontSize="large" />
        </div>
    )
}