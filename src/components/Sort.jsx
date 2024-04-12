import { useEffect, useState } from "react"

export default function Sort({userData, setFilterQuery, filterQuery}) {

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
    
    function handleChange(e) {
        if (e.target.value === 'All') {
            setFilterQuery('');
        } else {
            setFilterQuery(e.target.value);
        }
    }
    
    return (
        <div className="flex justify-center mt-2">
            <select className="p-3 max-w-screen-md w-full rounded-full" name="sort-by-department" id="sort" onChange={handleChange}>
                <option value={'All'}>All Departments</option>
                {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                ))}
            </select>
        </div>
    )
}