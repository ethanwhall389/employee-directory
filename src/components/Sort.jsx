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
        <div className="flex justify-end">
            <div className="flex flex-col gap-2 w-62 items-center">
            <span>Sort by department</span>
            <select className="p-2 w-full" name="sort-by-department" id="sort" onChange={handleChange}>
                <option value={'All'}>All</option>
                {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                ))}
            </select>
            </div>
        </div>
    )
}