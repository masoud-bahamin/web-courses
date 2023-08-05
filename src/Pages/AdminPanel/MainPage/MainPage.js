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
        <main className="py-3 bg-surface-secondary">
            <div className="container-fluid p-4">

                <div className="row g-6 mb-6">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col"> <span className="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span> <span className="h3 font-bold mt-2 mb-2">$750.90</span> </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle p-2"> <i className="fa fa-user"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm"> <span className="badge badge-pill bg-soft-success text-success "> <i className="bi bi-arrow-up me-1"></i>13% </span> <span className="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col"> <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span> <span className="h3 font-bold mb-0">215</span> </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-primary text-white text-lg rounded-circle p-2"> <i className="bi bi-people"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm"> <span className="badge badge-pill bg-soft-success text-success me-2"> <i className="bi bi-arrow-up me-1"></i>30% </span> <span className="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col"> <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span> <span className="h3 font-bold mb-0">1.400</span> </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-info text-white text-lg rounded-circle p-2"> <i className="bi bi-clock-history"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm"> <span className="badge badge-pill bg-soft-danger text-danger me-2"> <i className="bi bi-arrow-down me-1"></i>-5% </span> <span className="text-nowrap text-xs text-muted">Since last month</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col"> <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span> <span className="h3 font-bold mb-0">95%</span> </div>
                                    <div className="col-auto">
                                        <div className="icon icon-shape bg-warning text-white text-lg rounded-circle p-2"> <i className="bi bi-minecart-loaded"></i> </div>
                                    </div>
                                </div>
                                <div className="mt-2 mb-0 text-sm"> <span className="badge badge-pill bg-soft-success text-success me-2"> <i className="bi bi-arrow-up me-1"></i>10% </span> <span className="text-nowrap text-xs text-muted">Since last month</span> </div>
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