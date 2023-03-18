import React from 'react'

export default function Dashboard() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5  text-cener p-2 my-3' >
                    <div style={{ backgroundColor: "#fffff9", padding: 20 , height:"65vh"}}>
                        <h3 className='text-info'>Dashboard</h3>
                        <div style={{ textAlign: "center" }}>
                            <img src='/img/team-1.jpg' className='text-center w-25 m-4' style={{ borderRadius: "50%" }} />
                            <p>bahaminwp@gmail.com</p>
                            <p>0090 535 484 3540</p>
                            <button className='btn btn-info mb-4'>Edit account</button>
                            <div className='row justify-content-between px-3'>
                                <div className='col-md-4 p-2 border-left-3  text-center' >
                                    <div style={{ backgroundColor: "#fffff1", padding: 10 }}>
                                        <span className='text-success'>200</span>
                                        <p>Your Point</p>
                                    </div>
                                </div>
                                <div className='col-md-4 p-2 border-left-3  text-center' >
                                    <div style={{ backgroundColor: "#fffff1", padding: 10 }}>
                                        <span className='text-info'>15</span>
                                        <p>All Orders</p>
                                    </div>
                                </div>
                                <div className='col-md-4 p-2 border-left-3  text-center' >
                                    <div style={{ backgroundColor: "#fffff1", padding: 10 }}>
                                        <span className='text-danger'>425$</span>
                                        <p>Price </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 text-cener p-2 my-3 ' >
                    <div style={{ backgroundColor: "#fffff9", padding: 20 , height:"65vh"}}>
                        <h3 className='text-info'>Courses</h3>
                        <div >
                            <table className='table' >
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th>Date</th>
                                        <th>Progress</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Web design</td>
                                        <td>10/02/2022</td>
                                        <td>68%</td>
                                        <td><button className='btn btn-outline-info'>see</button></td>
                                    </tr>
                                    <tr>
                                        <td>React</td>
                                        <td>10/02/2022</td>
                                        <td>35%</td>
                                        <td><button className='btn btn-outline-info'>see</button></td>
                                    </tr>
                                    <tr>
                                        <td>Node Js</td>
                                        <td>10/02/2022</td>
                                        <td>0%</td>
                                        <td><button className='btn btn-outline-info'>see</button></td>
                                    </tr>
                                    <tr>
                                        <td>Web Seo</td>
                                        <td>10/02/2022</td>
                                        <td>10%</td>
                                        <td><button className='btn btn-outline-info'>see</button></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
