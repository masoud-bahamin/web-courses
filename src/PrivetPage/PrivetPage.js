import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/authContext'

export default function PrivetPage() {

    const { userInfo } = useContext(AuthContext)


    return (
        <>
            {userInfo && <>
                {userInfo.role === "ADMIN" ? (<Outlet />) : (<Navigate to="/login"/>)}
            </>}
        </>

    )
}
