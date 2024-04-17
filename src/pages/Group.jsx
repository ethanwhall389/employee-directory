import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GroupContext } from '../App';
import { UserContext } from '../App';
import EmployeeCard from '../components/EmployeeCard';
import fetchData from '../utils/fetchData';

export default function Group() {
    const params = useParams();
    const {groups} = useContext(GroupContext);
    const group = groups[params.groupId];
    const {users} = useContext(UserContext);
    const [groupUsers, setGroupUsers] = useState([]);


    
    useEffect(() => {
        let tempUsers = []

        for(let i = 0; i < group.groupUserIds.length; i++) {
            const id = group.groupUserIds[i];
            const user = users.find((user) => user.id === id);
            tempUsers.push(user);
        }

        setGroupUsers(tempUsers);
        console.log(groupUsers);
    }, [users])

    return (
        <>
        <h1>{group.groupName}</h1>
        <div>
            {groupUsers && groupUsers.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </>
    )
}