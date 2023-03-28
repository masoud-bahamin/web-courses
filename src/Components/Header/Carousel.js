import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import "./Carousel.css"
import Image1 from "./../../img/carousel-1.jpg"
import Image2 from "./../../img/carousel-2.jpg"
import Image3 from "./../../img/carousel-3.jpg"

export default function Landing() {

  const [showSlid, setShowSlid] = useState(0)

  useEffect(() => {

    const timer = setInterval(() => {

      setShowSlid(prev => {
        if (prev == 2) {
          prev = 0
          return prev
        }
        return prev + 1
      })

    }, 6000);
    return () => clearInterval(timer)

  }, [])


  return (
    <div class="container-fluid p-0 ">
      <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            onClick={() => setShowSlid(0)}
            data-target="#header-carousel" data-slide-to="0"
            className={showSlid == 0 ? "active" : ""}
          ></li>
          <li
            onClick={() => setShowSlid(1)}
            data-target="#header-carousel" data-slide-to="1"
            className={showSlid == 1 ? "active" : ""}
          ></li>
          <li
            onClick={() => setShowSlid(2)}
            data-target="#header-carousel" data-slide-to="2"
            className={showSlid == 2 ? "active" : ""}
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class={showSlid === 0 ? "carousel-item active" : "carousel-item"}
            style={{ minHeight: 300 }}>
            <img class="position-relative w-100" src={Image1} style={{ minHeight: 300, objectFit: "cover" ,maxHeight: "95vh" }} />
            <div class="carousel-caption d-flex align-items-center justify-content-center">
              <div class="p-5" style={{ width: "100%", maxWidth: 900 }}>
                <h5 class="text-white text-uppercase mb-md-3"> Best Online Courses</h5>
                <h1 class="display-3 text-white mb-md-4">

                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString('Best Education From Your Home ')
                      .start()
                    }}
                  />

                </h1>
                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
              </div>
            </div>
          </div>
          <div class={showSlid === 1 ? "carousel-item active" : "carousel-item"}
            style={{ minHeight: 300 }}>
            <img class="position-relative w-100" src={Image2} style={{ minHeight: 300, objectFit: "cover" ,maxHeight: "95vh"}} />
            <div class="carousel-caption d-flex align-items-center justify-content-center">
              <div class="p-5" style={{ width: "100%", maxWidth: 900 }}>
                <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                <h1 class="display-3 text-white mb-md-4">
                  
                <Typewriter
                    onInit={(typewriter) => {       
                      typewriter.typeString(" ")
                      .pauseFor(6000)
                      .typeString('Best Online Learning Platform ')
                      .start()
                    }}
                  />

                  </h1>
                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
              </div>
            </div>
          </div>
          <div class={showSlid === 2 ? "carousel-item active" : "carousel-item"}
            style={{ minHeight: 300 }}>
            <img class="position-relative w-100" src={Image1} style={{ minHeight: 300, objectFit: "cover" ,maxHeight: "95vh"}} />
            <div class="carousel-caption d-flex align-items-center justify-content-center">
              <div class="p-5" style={{ width: "100%", maxWidth: 900 }}>
                <h5 class="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                <h1 class="display-3 text-white mb-md-4">
                  
                <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(' ')
                      .pauseFor(12000)
                      .typeString("New Way To Learn From Home ")
                      .start()
                    }}
                  />
                  
                  </h1>
                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
