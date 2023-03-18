import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import "./CourseBox.css"

export default function CourseBox({ image, student, time, title, score, price, shortname, display ,description}) {

    const [showLoader , setShowLoader] = useState(true)


    return (
        <>
            {display === "fullWidth" ? (
                <div className="col-lg-12 col-md-6 mb-4 bg-secondary  ">
                    <div className="rounded overflow-hidden mb-1 row">
                        <img onLoad={() => setShowLoader(false)}
                        className="col-md-3 img-fluid" src={`/img/${image }`} alt="" />
                        {showLoader && <Loader />}
                        <div className="bg-secondary p-4 col-md-9">
                            <div className="d-flex justify-content-between mb-2">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>{student || 25} Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2">
                                </i>{`${Math.floor(time / 60) || 2}h 30m`}</small>
                            </div>
                            <Link className="h5" to={`/course/${shortname}`}>{title}</Link>
                            <p>{description}</p>

                        </div>
                    </div>
                    <div className="border-bottom mt-1 pt-2 mb-5">
                        <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{score || 4.5} <small>(250)</small></h6>
                            <h5 className="m-0">${price}</h5>
                        </div>
                    </div>

                </div>) :

                (<div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <img onLoad={() => setShowLoader(false)}
                        className="img-fluid" src={`/img/${image}`} alt="" />
                        {showLoader && <Loader />}
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>{student || 25} Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2">
                                </i>{`${Math.floor(time / 60) || 2}h 30m`}</small>
                            </div>
                            <Link className="h5" to={`/course/${shortname}`}>{title}</Link>

                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{score || 4.5} <small>(250)</small></h6>
                                    <h5 className="m-0">${price}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </>
    )
}
