import React, { useEffect, useState } from 'react'
import Loader from '../../../Components/Loader/Loader'
import api from '../../Api'
import "./MainPage.css"


export default function MainPage() {

    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        fetch(`${api}users.json`)
            .then(res => res.json())
            .then(data => setUsers((Object.entries(data)).reverse().splice(0, 10)))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <main class="py-3 bg-surface-secondary">
            <div class="container-fluid p-4">

                <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col"> <span class="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> <span class="h3 font-bold mt-2 mb-2">$750.90</span> </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle p-2"> <i class="fa fa-user"></i> </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm"> <span class="badge badge-pill bg-soft-success text-success "> <i class="bi bi-arrow-up me-1"></i>13% </span> <span class="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col"> <span class="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span> <span class="h3 font-bold mb-0">215</span> </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle p-2"> <i class="bi bi-people"></i> </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm"> <span class="badge badge-pill bg-soft-success text-success me-2"> <i class="bi bi-arrow-up me-1"></i>30% </span> <span class="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col"> <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span> <span class="h3 font-bold mb-0">1.400</span> </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle p-2"> <i class="bi bi-clock-history"></i> </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm"> <span class="badge badge-pill bg-soft-danger text-danger me-2"> <i class="bi bi-arrow-down me-1"></i>-5% </span> <span class="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col"> <span class="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span> <span class="h3 font-bold mb-0">95%</span> </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle p-2"> <i class="bi bi-minecart-loaded"></i> </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm"> <span class="badge badge-pill bg-soft-success text-success me-2"> <i class="bi bi-arrow-up me-1"></i>10% </span> <span class="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='alert alert-info'>Applications</div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <td>
                                        <img src={`/img/${user[1].image}`} style={{ width: 50 , borderRadius:50 , marginRight:10 }} />
                                        {user[1].name}
                                    </td>
                                    <td>{user[1].email}</td>
                                    <td>{user[1].date}</td>
                                    <td>
                                        <button
                                            // onClick={() => editUser(user[0])}
                                            className='btn btn-success btn-sm'>
                                            <i className='fa fa-user'></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            // onClick={() => deletUser(user[0])}
                                            className='btn btn-danger btn-sm'>
                                            <i className='fa fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </main>
    )
}