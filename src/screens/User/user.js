import React from "react";
import { useEffect } from "react";
import { manageUser } from "../../config/firebaseMethods";
import { useNavigate } from "react-router-dom";
import UserLayout from "./screens/userLayout";

export default function User() {
    const navigate = useNavigate() 

    useEffect(() => {
        manageUser()
            .then((res) => {
            })
            .catch((err) => {
                navigate('/login')
            })
    }, [])
    
    return <>
    <UserLayout/>
    </>
}