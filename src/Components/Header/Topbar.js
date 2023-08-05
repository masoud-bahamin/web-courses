import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import "./Topbar.css"
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <div className="container-fluid d-lg-block ">
            <div className="row align-items-center  px-xl-5 topbar-respansiv-div">
                <div className="col-lg-3 d-none d-lg-block">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="m-0"><span className="text-primary">WEB </span>COURSES</h1>
                    </Link>
                </div>
                <div className="col-lg-5 ">
                    <SearchBox />
                </div>
                <div className="col-lg-2 text-right d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                            <small>Bahaminwp@gmail.com</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 text-right d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                        <div className="text-left">
                            <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                            <small>+090 535 484 3540</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
