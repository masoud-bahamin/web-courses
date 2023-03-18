import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function Footer() {
    return (
        <>
            <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: 90}}>
                <div class="row pt-5">
                    <div class="col-lg-7 col-md-12">
                        <div class="row">
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Get In Touch</h5>
                                <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                                <SocialIcons />
                            </div>
                            <div class="col-md-6 mb-5">
                                <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Our Courses</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                                    <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 mb-5">
                        <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing: 5}}>Newsletter</h5>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <div class="w-100">
                            <div class="input-group">
                                <input type="text" class="form-control border-light" style={{padding: 30 }} placeholder="Your Email Address"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary px-4">Sign Up</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
                <div class="row">
                    <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p class="m-0 text-white">&copy; <a href="#">Web Courses</a>. All Rights Reserved. Designed by <a href="https://webround.com" >Masoud Bahamin</a>
                        </p>
                    </div>
                    <div class="col-lg-6 text-center text-md-right">
                        <ul class="nav d-inline-flex">
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
