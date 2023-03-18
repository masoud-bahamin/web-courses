import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import "./Topbar.css"

export default function Topbar() {
    return (
        <div class="container-fluid d-lg-block ">
            <div class="row align-items-center  px-xl-5 topbar-respansiv-div">
                <div class="col-lg-3 d-none d-lg-block">
                    <a href="" class="text-decoration-none">
                        <h1 class="m-0"><span class="text-primary">WEB </span>COURSES</h1>
                    </a>
                </div>
                <div class="col-lg-5 ">
                    <SearchBox />
                </div>
                <div class="col-lg-2 text-right d-none d-lg-block">
                    <div class="d-inline-flex align-items-center">
                        <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
                        <div class="text-left">
                            <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
                            <small>Bahaminwp@gmail.com</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 text-right d-none d-lg-block">
                    <div class="d-inline-flex align-items-center">
                        <i class="fa fa-2x fa-phone text-primary mr-3"></i>
                        <div class="text-left">
                            <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
                            <small>+090 535 484 3540</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
