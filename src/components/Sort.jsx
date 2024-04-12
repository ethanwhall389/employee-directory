import { useEffect, useState } from "react"

export default function Sort({userData}) {
    
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        let tempDepartments = [];
        userData.forEach(user => {
            if(!tempDepartments.includes(user.company.department)) {
                tempDepartments.push(user.company.department);
            }
        })
        setDepartments(tempDepartments);
    }, [userData])    
    
    return (
        <select name="sort-by-department" id="sort">
            {departments.map((dept, index) => (
                <option key={index} value={dept.toLowerCase()}>{dept}</option>
            ))}
        </select>
    )
}