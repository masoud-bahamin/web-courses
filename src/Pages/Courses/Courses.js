import React, { useEffect, useState } from 'react'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import FilterSection from '../../Components/FilterSection/FilterSection'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Pagination from '../../Components/Pagination/Pagination'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import TopSubjects from '../../Components/TopSubjects/TopSubjects'
import api from '../Api'

export default function Courses() {

  const [courses, setCourses] = useState([])

  const getAllCourses = () => {
    fetch(`${api}courses.json`)
      .then(res => res.json())
      .then(data => setCourses(Object.entries(data)))
  }

  useEffect(() => {
    getAllCourses()
  }, [])

  return (
    <>
      <Header />

      <Breadcrump title="Home" titleHref="/" subTitle="Courses" />

      <TopSubjects title="Categorys" />
      {/* <FilterSection /> */}
      <Pagination onPage={3} courses={courses} />



      <Footer />
    </>
  )
}
