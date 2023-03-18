import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <ul class="nav flex-column py-4 border-right">
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">DASHBOARD</NavLink>
            </li>
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">PROFILE</NavLink>
            </li>
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">MY COURSE</NavLink>
            </li>
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">MY ACCOUNT</NavLink>
            </li>
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">MY ORDERS</NavLink>
            </li>
            <li class="nav-item p-3">
                <i className='fa fa-check mr-2 ml-2'></i>
                <NavLink class="nav-link" to="/">LOG OUT</NavLink>
            </li>
           
        </ul>
    )
}
