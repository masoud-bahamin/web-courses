import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import CourseBox from '../../Components/CourseBox/CourseBox'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import api from '../Api'

export default function Teacher() {

    const [courses, setCourses] = useState([])
    const [teacher, setTeacher] = useState([])

    const { teacherId } = useParams()

    const getAllCourses = () => {
        fetch(`${api}courses.json`)
            .then(res => res.json())
            .then(data => {
                let teacherCourses = (Object.entries(data)).filter(course => course[1].teacher?.username === teacherId)
                setCourses(teacherCourses)
            })
    }
    const getAllTeachers = () => {
        fetch(`${api}users.json`)
            .then(res => res.json())
            .then(data => {
                let teacherInfo = (Object.entries(data)).find(teacher => teacher[1].username === teacherId)
                setTeacher(teacherInfo)
            })
    }

    useEffect(() => {
        getAllCourses()
        getAllTeachers()
    }, [])

    return (
        <>
            <Header />
            <Breadcrump title="Home" titleHref="/" subTitle={teacherId} />
            <div class="container-fluid py-5">
                <div class="container py-5">

                    <div class="row">
                        <div class="col-lg-8">


                            <div className='row' >
                                {courses.map(course => (
                                    <CourseBox key={course[0]} {...course[1]} display="fullWidth"/>
                                ))}
                            </div>

                        </div>

                        <div class="col-lg-4 mt-5 mt-lg-0">
                            {/* <!-- Teacher Bio --> */}
                            <div class="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                <img src={`/img/${teacher[1]?.image}`} class="img-fluid rounded-circle mx-auto mb-3 width: 100px;" />
                                <h3 class="text-primary mb-3 ">{teacher[1]?.name} </h3>
                                <h3 class="text-uppercase mb-4 letter-spacing-5 text-white">Teacher</h3>
                                <p class="text-white mb-3">{teacher[1]?.email}</p>
                                <p class="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
                                    no ut est ipsum erat kasd amet elitr</p>
                            </div>





                            <div class="mb-5">

                                <h2 class="mb-4">Web courses lorem et ea</h2>
                                <img class="img-fluid rounded w-50 float-left mr-4 mb-3" src="/img/blog-1.jpg" alt="Image" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                    est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                    sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                    nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                    sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                    voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                                    justo gubergren labore sit.</p>
                            </div>



                            {/* <!-- Tag Cloud --> */}
                            <div class="mb-5">
                                <h3 class="text-uppercase mb-4 letter-spacing-5">Tag Cloud</h3>
                                <div class="d-flex flex-wrap m-n1">
                                    <a href="" class="btn btn-outline-primary m-1">Design</a>
                                    <a href="" class="btn btn-outline-primary m-1">Development</a>
                                    <a href="" class="btn btn-outline-primary m-1">Marketing</a>
                                    <a href="" class="btn btn-outline-primary m-1">SEO</a>
                                    <a href="" class="btn btn-outline-primary m-1">Writing</a>
                                    <a href="" class="btn btn-outline-primary m-1">Consulting</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <div className='container mt-5'>

            </div>
            <Footer />
        </>
    )
}
