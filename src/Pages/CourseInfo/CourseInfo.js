import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import BoxIcon from '../../Components/BoxIcon/BoxIcon'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Comment from '../../Components/Comment/Comment'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import AuthContext from '../../Context/authContext'
import api from '../Api'
import "./CourseInfo.css"

export default function CourseInfo() {
    const [courseInfo, setCourseInfo] = useState([])
    const [lastCourses, setLastCourses] = useState([])

    const { courseId } = useParams()

    const authContext = useContext(AuthContext)

    const getAllCourses = () => {
        fetch(`${api}courses.json`)
            .then(res => res.json())
            .then(data => {
                let allCourses = Object.entries(data);
                setCourseInfo(allCourses.find(course => course[1].shortname === courseId))
                setLastCourses(allCourses.reverse().slice(0, 3))
            })
    }


    useEffect(() => {
        getAllCourses()
    }, [courseId])

    const registerCourse = () => {
        swal({
            title: "Are you sure about register for this course",
            icon: "success",
            buttons: ["cancel", "yes"]
        }).then(res => {
            if (res) {

                let newInfo = { ...authContext.userInfo }
                newInfo.courses.push(courseId)

                fetch(`${api}users/${authContext.userID}.json`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newInfo)
                }).then(res => {
                    if (res.ok) {
                        swal({
                            title: "your registration was successfully",
                            icon: "success"
                        })
                    }
                })
            }
        })
    }


    return (
        <>
            <Header />
            <Breadcrump title="Home" titleHref="/" subTitle={courseId} />

            <div class="container-fluid py-5">
                <div class="container py-5">
                    {courseInfo.length === 0 ? (<h3>Loading...</h3>) : (
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="mb-5">
                                    <h6 class="text-primary mb-3">{courseInfo[1].date}</h6>
                                    <h1 class="mb-5">{courseInfo[1].title}</h1>
                                    <img class="img-fluid rounded w-100 mb-4" src={`/img/${courseInfo[1].image}`} alt="Image" />
                                    <p>{courseInfo[1].description}</p>
                                    <p>{courseInfo[1].description}</p>

                                    <div className='row box-icons-section'>
                                        <BoxIcon title="7 weeks" subTitle="2–4 hours per week" icon="fa fa-clock"/>
                                        <BoxIcon title="Self-paced" subTitle="Progress at your own speed" icon="fa fa-user"/>
                                        <BoxIcon title="Free" subTitle="Optional upgrade available" icon="fa fa-dollar-sign"/>
                                    </div>


                                    <h2 class="mb-4">Web courses lorem et ea</h2>
                                    <img class="img-fluid rounded w-50 float-left mr-4 mb-3" src="/img/blog-1.jpg" alt="Image" />
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                        est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                        sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                        nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                        sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                        voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                                        Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et,
                                        magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo
                                        tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed
                                        sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam
                                        takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet
                                        labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit.</p>
                                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at
                                        est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet
                                        sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed
                                        nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                                        sadipscing gubergren erat.</p>
                                </div>

                                <Comment />

                            </div>

                            <div class="col-lg-4 mt-5 mt-lg-0">
                                {/* <!-- Teacher Bio --> */}
                                <div class="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                                    <img src="/img/user.jpg" class="img-fluid rounded-circle mx-auto mb-3 width: 100px;" />
                                    <h3 class="text-primary mb-3 ">{courseInfo[1].teacher?.name || "Juhn Dou"}</h3>
                                    <h3 class="text-uppercase mb-4 letter-spacing-5 text-white">{courseInfo[1].title}{' '}Teacher</h3>
                                    <p class="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit
                                        no ut est ipsum erat kasd amet elitr</p>
                                </div>

                              
                                {/* <!-- register button --> */}
                                <div class="mb-5">
                                    <div>
                                        {authContext.userInfo?.courses?.some(course => course === courseId) ? (
                                            <div className='alert alert-success'>Registered</div>
                                        ) : (
                                            <div class="input-group">
                                                <button onClick={() => registerCourse()}
                                                    class="form-control form-control-lg btn-info" >Join Course<i class="fa fa-book ml-2"></i></button>

                                                <div class="input-group-append">
                                                    <span class="input-group-text bg-transparent text-primary">{courseInfo[1].price}$ </span>

                                                </div>
                                            </div>)}
                                    </div>
                                </div>

                                {/* <!-- Category List --> */}
                                <div class="mb-5">
                                    <h3 class="text-uppercase mb-4 letter-spacing-5">Categories</h3>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Web Design</a>
                                            <span class="badge badge-primary badge-pill">150</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Web Development</a>
                                            <span class="badge badge-primary badge-pill">131</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Online Marketing</a>
                                            <span class="badge badge-primary badge-pill">78</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Keyword Research</a>
                                            <span class="badge badge-primary badge-pill">56</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <a href="" class="text-decoration-none h6 m-0">Email Marketing</a>
                                            <span class="badge badge-primary badge-pill">98</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!-- Last Courses --> */}
                                <div class="mb-5">
                                    <h3 class="text-uppercase mb-4 letter-spacing-5">Recent Courses</h3>
                                    {lastCourses.map(course => (
                                        <Link key={course[0]}
                                            class="d-flex align-items-center text-decoration-none mb-3"
                                            to={`/course/${course[1].shortname}`}>
                                            <img class="img-fluid rounded width-100" src={`/img/${course[1].image}`} alt="" />
                                            <div class="pl-3">
                                                <h6 class="m-1">{course[1].title}</h6>
                                                <small>{course[1].date}</small>
                                            </div>
                                        </Link>
                                    ))}

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
                        </div>)}
                </div>
            </div >

            <Footer />
        </>

    )
}
