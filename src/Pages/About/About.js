import React from 'react'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Img1 from "./../../img/testimonial-1.jpg"
import Img2 from "./../../img/testimonial-2.jpg"
import Img3 from "./../../img/testimonial-3.jpg"

export default function About() {
    return (
        <>
            <Header />
            <Breadcrump title="HOME" subTitle="About" titleHref="/"/>
            <AboutSection />

            {/* <!-- Testimonial Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3 letter-spacing-5">Testimonial</h5>
                <h1>What Say Our Students</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className="img-fluid mx-auto mb-3" src={Img1} alt=""/>
                            <h5 className="m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className="img-fluid mx-auto mb-3" src={Img2} alt=""/>
                            <h5 className="m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                            <img className="img-fluid mx-auto mb-3" src={Img3} alt=""/>
                            <h5 className="m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}

            <Footer />
        </>
    )
}
