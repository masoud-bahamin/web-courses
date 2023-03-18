import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/UserPanel/Sidebar/Sidebar'

export default function index() {
    return (
        <>
            <Header />

            <div className=' row'>

                
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>

            </div>

            <Footer />
        </>
    )
}
