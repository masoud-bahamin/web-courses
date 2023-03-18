import React from 'react'
import Header from '../Components/Header/Header'
import Carousel from '../Components/Header/Carousel'
import AboutSection from '../Components/AboutSection/AboutSection'
import TopSubjects from '../Components/TopSubjects/TopSubjects'
import PopularCourses from '../Components/PopularCourses/PopularCourses'
import Teachers from '../Components/Teachers/Teachers'
import Footer from '../Components/Footer/Footer'
import Chat from '../Components/Chat/Chat'

export default function index() {




  return (
    <>
      <Header />
      <Carousel />
      <Chat />
      <AboutSection />
      <TopSubjects title="Subjects" />
      <PopularCourses />
      <Teachers />
      <Footer />
    </>
  )
}
