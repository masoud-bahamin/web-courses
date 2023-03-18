import "./Category.css"
import React, { useEffect, useState } from 'react'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Pagination from '../../Components/Pagination/Pagination'
import TopSubjects from '../../Components/TopSubjects/TopSubjects'
import api from '../Api'
import { useParams } from "react-router-dom"
import CourseBox from "../../Components/CourseBox/CourseBox"
import SectionHeader from "../../Components/SectionHeader/SectionHeader"

export default function Category() {

    const [courses, setCourses] = useState([])

    const { categoryId } = useParams()

    const getAllCourses = () => {
        fetch(`${api}courses.json`)
            .then(res => res.json())
            .then(data => {
                let categoryCourses = (Object.entries(data)).filter(course => course[1].category === categoryId)
                setCourses(categoryCourses)
            })
    }

    useEffect(() => {
        getAllCourses()
    }, [categoryId])

    console.log(courses);


    return (
        <>
            <Header />

            <Breadcrump title="Home" titleHref="/" subTitle={categoryId} />

            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <SectionHeader title={categoryId} subTitle="Our Courses" />
                    </div>
                    <div class="row">
                    {courses.map(course => (
                        <CourseBox key={course[0]} {...course[1]}/>
                    ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
