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
import { useFetch } from "../../Hooks/useFetch"
import ErrorAlert from "../../Components/ErrorAlert/ErrorAlert"

export default function Category() {

    const [courses, setCourses] = useState([])

    const { categoryId } = useParams()

    const [data, loading, error] = useFetch("courses.json")


    useEffect(() => {
        if (!loading) {
            let categoryCourses = (data).filter(course => course[1].category === categoryId)
            setCourses(categoryCourses)
        }
    }, [categoryId, data])


    return (
        <>
            <Header />

            <Breadcrump title="Home" titleHref="/" subTitle={categoryId} />

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <SectionHeader title={categoryId} subTitle="Our Courses" />
                    </div>
                    {error ? (
                        <ErrorAlert error={error} />
                    ) : (
                        <div className="row">
                            {courses.map(course => (
                                <CourseBox key={course[0]} {...course[1]} />
                            ))}
                        </div>
                    )}

                </div>
            </div>

            <Footer />
        </>
    )
}
