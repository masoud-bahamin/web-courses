import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/AdminPanel/Sidebar/Sidebar'
import Topbar from '../../Components/AdminPanel/Topbar/Topbar'
import Chat from './Chats/Chats'
import "./index.css"

export default function index() {
    return (
        <div id="viewport-admin-panel">

            <Sidebar />

            <div id="content-admin-panel">
                <Topbar />
                <div >
                    <Outlet />
                    <Chat />
                </div>
            </div>
        </div>
    )
}
