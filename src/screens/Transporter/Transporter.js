import React, { useEffect } from 'react'
import { manageUser } from '../../config/firebaseMethods' 
import { useNavigate } from "react-router-dom";
import TransporterLayout from './screens/TranspoterLayout';

function Transporter() {

    const navigate = useNavigate() 

    useEffect(() => {
        manageUser()
            .then((res) => {
            })
            .catch((err) => {
                navigate('/login')
            })
    }, [])
    
    return (
        <>
            <TransporterLayout/>
        </>
    )
}

export default Transporter