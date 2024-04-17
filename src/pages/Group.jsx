import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { GroupContext } from '../App';
import { UserContext } from '../App';
import fetchData from '../utils/fetchData';

export default function Group() {
    const params = useParams();
    const {groups} = useContext(GroupContext);
    const group = groups[params.groupId];

    const {users} = useContext(UserContext);
    let groupUsers = [];

    useEffect(() => {
        groupUsers = users.filter((user) => (
            user.id === group.groupId
        ))
    }, [users])

    return (
        <>
        <h1>{group.groupName}</h1>
        <div>

        </div>
        </>
    )
}