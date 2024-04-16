import { useNavigate } from "react-router-dom"

export default function EmployeeCard({userData}) {
    
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/user/${userData.id}`)
    }
    
    return (
    <div className="hover:cursor-pointer border-box border-2 rounded-md w-full flex gap-2 h-36 items-center p-4 overflow-hidden" onClick={handleClick}>
                <img className="rounded-full h-full w-auto" src={userData.image} alt={`${userData.firstName} profile photo`} />
            <div className="">
                <p className="text-lg font-bold">{userData.firstName} {userData.lastName}</p>
                <p>{userData.company.title} | {userData.company.department}</p>
                <a href={`mailto:${userData.email}`}><p>{userData.email}</p></a>
                <p>{userData.phone}</p>
            </div>
    </div>
    )
}