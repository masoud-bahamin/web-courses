import React, { useContext } from 'react'
import AuthContext from '../../../Context/authContext'
import "./Topbar.css"
import { HiOutlineMail } from "react-icons/hi"
import { useState } from 'react'
import Img1 from "./../../../img/p.jpg"

export default function Topbar() {

    const [show, setShow] = useState(false)

    const authContext = useContext(AuthContext)

    return (
        <nav className="navbar navbar-default topbar-admin-panel">
            <div className="container-fluid">
                <div>
                    <img src={Img1} className='image-topbar-admin-panel' />
                    <a href="#">{authContext.userInfo ? authContext.userInfo.name : "user"}</a>
                </div>

                <div href="#" className='col-md-1 position-relative'>
                    <div onClick={()=> setShow(prev => !prev)}>
                        <i className="fa fa-bell  " style={{ fontSize: 30, color: "gray", cursor: "pointer" }}> </i>
                        <span className="position-absolute top-0 start-100 translate-middle badge text-white rounded-pill bg-danger">
                            4
                        </span>
                    </div>

                    <div className={`position-absolute top-100 topbar-notification-show ${show ? "show" : ""}`}>
                        <div>
                            <ul style={{ marginLeft: "-10px" }}>
                                <li className='topbar-notification-list'>
                                    <HiOutlineMail />
                                    <span className='mr-3 ml-2'>you have 1 meesege</span>
                                    <button className='btn btn-danger btn-sm'>X</button>
                                </li>
                                <li className='topbar-notification-list'>
                                    <HiOutlineMail />
                                    <span className='mr-3 ml-2'>user commented in your article</span>
                                    <button className='btn btn-danger btn-sm'>X</button>
                                </li>
                                <li className='topbar-notification-list'>
                                    <HiOutlineMail />
                                    <span className='mr-3 ml-2'>you have 1 email </span>
                                    <button className='btn btn-danger btn-sm'>X</button>
                                </li>
                                <li className='topbar-notification-list'>
                                    <HiOutlineMail />
                                    <span className='mr-3 ml-2'>1 user was registered</span>
                                    <button className='btn btn-danger btn-sm'>X</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
