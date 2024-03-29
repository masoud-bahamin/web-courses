import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import AuthContext from '../../../Context/authContext'
import "./Sidebar.css"

export default function Sidebar() {




    const authContext = useContext(AuthContext)
    
    const navigate = useNavigate()

    const Logout = event => {
        event.preventDefault()

        swal("Are you sure?", {
            icon: "warning",
            buttons: ["Cancel", "Yes"]
        }).then(res => {
            if (res) {
                authContext.logOutUser()
                navigate("/")
            }
        })
    }



    return (
        <div id="sidebar-admin-panel">
            <header className='header-admin-panel'>
                <Link className='a-header-admin-panel' to="/">Main Page</Link>
            </header>
            <ul className="nav-admin-panel">
                <li className='nav-list-admin-panel'>
                    <NavLink to="dashboard"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <i className="zmdi zmdi-view-dashboard"></i> Dashboard
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="offs">
                        <i className="zmdi zmdi-Navlink"></i> Offs
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="users">
                        <i className="zmdi zmdi-widgets"></i> Users
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="courses">
                        <i className="zmdi zmdi-calendar"></i> Courses
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="comments">
                        <i className="zmdi zmdi-info-outline"></i> Comments
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="articles">
                        <i className="zmdi zmdi-settings"></i> Articles
                    </NavLink>
                </li>
                <li className='nav-list-admin-panel'>
                    <NavLink to="messages">
                        <i className="zmdi zmdi-comment-more"></i> Messages
                    </NavLink>
                </li>
                <li
                    onClick={(event) => Logout(event)}
                    className='nav-list-admin-panel' style={{ color: "#FF6600" }}>
                    <a href='#'>
                        <i className="zmdi zmdi-comment-more"></i> Log Out
                    </a>
                </li>
            </ul>
        </div>
    )
}
