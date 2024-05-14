import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { GroupContext } from "../../App";
import fetchData from "../../utils/fetchData";
import CircularProgress from "@mui/material/CircularProgress";
import AddToGroup from "./AddToGroup";
import Modal from "../../global-components/Modal/Modal";
import ModalAddToGroup from "./ModalAddToGroup";
import BackArrow from "../../global-components/UI/BackArrow";

export default function User() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [formattedBirthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const params = useParams();
    const {groups} = useContext(GroupContext);
    let data = null;


    const dateFormatOptions = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }

    useEffect(() => {
        async function getData() {
            data = await fetchData(`https://dummyjson.com/users/${params.userId}`, setIsLoading);
            setUserData(data);
            const birthdate = new Date(data.birthDate);
            const currentDate = new Date();
            setAge(currentDate.getFullYear() - birthdate.getFullYear());
            setBirthdate(birthdate.toLocaleDateString('en-US', dateFormatOptions));
        }
        getData();
    }, [])

    return (
        <>
        <Modal isVisible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <ModalAddToGroup userData={userData}/>
        </Modal>

        <BackArrow/>
        <div className="p-2 h-screen flex justify-center items-center -m-5">
        {isLoading && <CircularProgress/>}
        {userData && 
        <div className="p-10 max-w-screen-md mx-auto border-2 rounded-lg">
            <>
            <div className="flex h-44 justify-center items-center gap-7 my-6">
                <img className="rounded-full h-full w-auto shadow-lg" src={userData.image} alt={`${userData.firstName} profile photo`} />
                <div>
                    <h1 className="text-2xl">{userData.firstName} {userData.lastName}</h1>
                    <h2 className="text-xl mb-4">{userData.company.title} | {userData.company.department}</h2>
                    <AddToGroup userData={userData} onOpen={() => setModalVisible(true)}/>
                </div>
            </div>
            <div className="pl-4 max-w-screen-lg mx-auto flex flex-col">
                <div className="my-4">
                    <h2 className="text-2xl w-fit pr-6 border-b-2">Contact</h2>
                    <p className="text-lg">Phone: {userData.phone}</p>
                    <p className="text-lg">Email: {userData.email}</p>
                </div>
                <div className="my-4">
                    <h2 className="text-2xl w-fit pr-6 border-b-2">Address</h2>
                    <p className="text-lg">{userData.address.address}</p>
                    <p className="text-lg">{userData.address.city}, {userData.address.state} {userData.address.postalCode}</p>
                </div>
                <div>
                    <h2 className="text-2xl w-fit pr-4 border-b-2">Other Info</h2>
                    <p className="text-lg">Birthday: {formattedBirthdate}</p>
                    <p>Age: {age}</p>
                </div>
            </div>
            </>
        </div>
        }
        </div>
        </>
    )
}