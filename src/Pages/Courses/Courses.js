import React, { useEffect, useState } from 'react'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import FilterSection from '../../Components/FilterSection/FilterSection'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Pagination from '../../Components/Pagination/Pagination'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import TopSubjects from '../../Components/TopSubjects/TopSubjects'
import api from '../Api'
import { useFetch } from '../../Hooks/useFetch'
import Loader from '../../Components/Loader/Loader'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert'

export default function Courses() {

  const [courses, setCourses] = useState([])
  const [data, loading, error] = useFetch("courses.json")

  return (
    <>
      <Header />
      <Breadcrump title="Home" titleHref="/" subTitle="Courses" />
      <TopSubjects title="Categorys" />
      {error ? (<ErrorAlert error={error} />) : (<>
        {
          loading ? (
            <Loader />
          ) : (
            <Pagination onPage={3} courses={data} />
          )
        }
      </>)}

      <Footer />
    </>
  )
}
