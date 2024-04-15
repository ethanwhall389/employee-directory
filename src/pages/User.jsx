import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import CircularProgress from "@mui/material/CircularProgress";

export default function User() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetchData(`https://dummyjson.com/users/${params.userId}`, setUserData, setIsLoading);
        console.log(userData);
    }, [])

    return (
        <>
        {isLoading && <CircularProgress/>}
        {userData && <h1>{userData.firstName}</h1>}
        </>
    )
}