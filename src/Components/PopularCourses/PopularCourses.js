import React, { useEffect, useState } from 'react'
import CourseBox from '../CourseBox/CourseBox'
import SectionHeader from '../SectionHeader/SectionHeader'
import api from '../../Pages/Api'

export default function PopularCourses() {
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
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <SectionHeader title="Courses" subTitle="Our Popular Courses" />
        </div>
        <div class="row">
          {[...courses].reverse().slice(0,6).map(course => (
            <CourseBox key={course[0]} {...course[1]} />
          ))}
        </div>
      </div>
    </div>
  )
}
