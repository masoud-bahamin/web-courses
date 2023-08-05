import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CourseBox from '../CourseBox/CourseBox'
import FilterSection from '../FilterSection/FilterSection'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Pagination.css"

export default function Pagination({ courses, onPage }) {

    const [filteredCourses, setFilteredCourses] = useState(courses)
    const [allCourses, setAllCourses] = useState(courses)
    const [coursePage, setCoursePage] = useState([])
    // const [filterName, setFilterName] = useState("all")
    const [display, setDisplay] = useState("table")

    let pages = Math.ceil(filteredCourses.length / onPage)
    let { page } = useParams()

    useEffect(() => {
        setFilteredCourses(courses)
        setAllCourses(courses)
    }, [courses])

    useEffect(() => {
        setCoursePage(filteredCourses.slice((page - 1) * onPage, Number(page) * onPage))
    }, [page, courses, filteredCourses])

    const displayHandler = value => {
        setDisplay(value)
    }

    const filterCourses = value => {
        // setFilterName(value)

        switch (value) {
            case "latest": {
                setFilteredCourses([...allCourses].reverse().slice())
                break
            }
            case "cheapest": {
                setFilteredCourses([...courses].sort((a, b) => parseFloat(a[1].price) - parseFloat(b[1].price)))
                break
            }
            case "expensive": {
                setFilteredCourses([...courses].sort((a, b) => parseFloat(b[1].price) - parseFloat(a[1].price)))
                break
            }
            default: {
                return setFilteredCourses(courses)
            }
        }
    }

    // console.log(filteredCourses);

    return (

        <div className="container-fluid ">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <SectionHeader title="Courses" subTitle="Our Courses" />
                </div>
                <FilterSection handler={displayHandler} display={display} filterCourses={filterCourses} />
                <div className="row">
                    {coursePage.map(course => (
                        <CourseBox key={course[0]} {...course[1]} display={display} />
                    ))}
                </div>

                <div className="col-12">
                    <nav aria-label="Page navigation">
                        <ul className="pagination pagination-lg justify-content-center mb-0">
                            <li className={`page-item ${page == 1 ? "disabled" : ""} `}>
                                <Link className="page-link" to={`/courses/${Number(page) - 1}`} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                            </li>

                            {Array(pages).fill(0).map((num, index) => (
                                <Link to={`/courses/${index + 1}`}>
                                    <li className={page == (index + 1) ? "page-item active" : "page-item"}><a className="page-link" href="#">
                                        {index + 1}
                                    </a></li>
                                </Link>
                            ))}

                            <li className={`page-item ${page == pages ? "disabled" : ""} `}>
                                <Link className="page-link" to={`/courses/${Number(page) + 1}`} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    )
}
