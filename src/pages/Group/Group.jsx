import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { GroupContext } from '../../App';
import { UserContext } from '../../App';
import EmployeeCard from '../../global-components/UI/EmployeeCard';
import MenuOption from './MenuOption';
import Modal from '../../global-components/Modal/Modal';
import ModalEmail from './ModalEmail';
import ModalDelete from './ModalDelete';
import BackArrow from '../../global-components/UI/BackArrow';

import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Group() {
    const params = useParams();
    const {groups} = useContext(GroupContext);
    const group = groups[params.groupId];
    const {users} = useContext(UserContext);
    const [groupUsers, setGroupUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    function emailCb() {
        setModalContent('Email');
        setModalVisible(true);
    }

    function deleteCb() {
        setModalContent('Delete Group');
        setModalVisible(true);
    }


    
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
        <Modal isVisible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            {modalContent === 'Email' ? 
                <ModalEmail onRequestClose={() => setModalVisible(false)}/> :
            modalContent === "Delete Group" ? 
                <ModalDelete group={group}/> :
            null
            }
        </Modal>
        <BackArrow/>
        <h1 className='text-3xl'>{group.groupName}</h1>
        <div className='flex gap-8 justify-center mx-auto md:justify-end'>
            <MenuOption optionLogo={<EmailIcon fontSize='large'/>} optionText={'Mass Email'} cb={emailCb}/>
            <MenuOption optionLogo={<DeleteIcon fontSize='large'/>} optionText={'Delete Group'} cb={deleteCb}/>
        </div>
        <div className='my-10 grid grid-cols-responsiveMd gap-3 max-w-screen-lg mx-auto'>
            {groupUsers && groupUsers.map((user) => (
                <EmployeeCard key={user.id} userData={user}/>
            ))}
        </div>
        </>
    )
}