import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import CircularProgress from "@mui/material/CircularProgress";

export default function User() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const params = useParams();
    let data = null;

    useEffect(() => {
        async function getData() {
            data = await fetchData(`https://dummyjson.com/users/${params.userId}`, setIsLoading);
            setUserData(data);
        }
        getData();
    }, [])

    return (
        <>
        {isLoading && <CircularProgress/>}
        {userData && <h1>{userData.firstName}</h1>}
        </>
    )
}