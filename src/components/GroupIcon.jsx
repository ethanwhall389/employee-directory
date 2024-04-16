import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GroupContext } from "../App";
import GroupsIcon from '@mui/icons-material/Groups';

export default function GroupIcon() {
    const {groups} = useContext(GroupContext);

    const navigate = useNavigate();

    function handleClick() {
      navigate("/groups", {replace: false})
    }

    return (
      <div className="relative w-fit m-4 hover:cursor-pointer" onClick={handleClick}>
        <div className="z-10 relative">
          <GroupsIcon fontSize="large"/>
        </div>
        {groups.length > 0 ?
        <div className="bg-blue-300 absolute -top-1 -right-4 rounded-full w-6 h-6 text-center">
          <span>{groups.length}</span>
        </div>
        : ''
        }
      </div>
    )
}