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
            <div className="container-fluid py-5">
                <div className="container py-5">

                    <div className="row">
                        <div className="col-lg-8">


                            <div className='row' >
                                {courses.map(course => (
                                    <CourseBox key={course[0]} {...course[1]} display="fullWidth"/>
                                ))}
                            </div>

                        </div>

                        <div className="col-lg-4 mt-5 mt-lg-0">
                            {/* <!-- Teacher Bio --> */}
                            <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQMup2MDZL19URJdW2rnUQAJu8TLQ6MrpgHpz4qY0XewFMPiUfLknKO8_1_FjwkIGPr0&usqp=CAU" className="img-fluid rounded-circle mx-auto mb-3 " width={150} />
                                <h3 className="text-primary mb-3 ">{teacher[1]?.name} </h3>
                                <h3 className="text-uppercase mb-4 letter-spacing-5 text-white">Teacher</h3>
                                <p className="text-white mb-3">{teacher[1]?.email}</p>
                                <p className="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
                                    no ut est ipsum erat kasd amet elitr</p>
                            </div>





                            <div className="mb-5">

                                <h2 className="mb-4">Web courses lorem et ea</h2>
                                <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src="https://img.freepik.com/free-vector/hand-drawn-art-sketch-happy-teachers-day-composition-design_1035-19266.jpg?size=626&ext=jpg&ga=GA1.2.606090072.1690878438&semt=country_rows_v2" alt="Image" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                    est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                    sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                    nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                    sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                    voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                                    justo gubergren labore sit.</p>
                            </div>



                            {/* <!-- Tag Cloud --> */}
                            <div className="mb-5">
                                <h3 className="text-uppercase mb-4 letter-spacing-5">Tag Cloud</h3>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href="" className="btn btn-outline-primary m-1">Design</a>
                                    <a href="" className="btn btn-outline-primary m-1">Development</a>
                                    <a href="" className="btn btn-outline-primary m-1">Marketing</a>
                                    <a href="" className="btn btn-outline-primary m-1">SEO</a>
                                    <a href="" className="btn btn-outline-primary m-1">Writing</a>
                                    <a href="" className="btn btn-outline-primary m-1">Consulting</a>
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
