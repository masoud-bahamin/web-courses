import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../Context/authContext'
import "./Navbar.css"

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [showSubjectMenu, setShowSubjectMenu] = useState(false)
    const [showBlogMenu, setShowBlogMenu] = useState(false)
    const [showWebMenu, setShowWebMenu] = useState(false)

    const authContext = useContext(AuthContext)

    return (
        <div className="container-fluid">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        onClick={(event) => {
                            event.preventDefault()
                            setShowSubjectMenu(prev => !prev)
                        }}
                        className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{ height: 67, padding: " 0 30px" }}>
                        <h5 className="text-primary m-0">
                            {showSubjectMenu ? (<i className="fa fa-book-close mr-2"></i>) : (<i className="fa fa-book-open mr-2"></i>)}
                            Subjects</h5>
                        {showSubjectMenu ? (<i className="fa fa-angle-up text-primary"></i>) : (<i className="fa fa-angle-down text-primary"></i>)}

                    </a>
                    <nav class={`${showSubjectMenu && "show"} collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light`} id="navbar-vertical" style={{ width: "calc(100% - 30px)", zIndex: 9 }}>
                        <div className="navbar-nav w-100">
                            <div className="nav-item dropdown">
                                <Link
                                    onClick={(event) => {
                                        event.preventDefault()
                                        setShowWebMenu(prev => !prev)
                                    }}
                                    to="/category/Frontend" className="nav-link " data-toggle="dropdown">Frontend {showWebMenu ? (<i className="fa fa-angle-up float-right mt-1"></i>) : (<i className="fa fa-angle-down float-right mt-1"></i>)}
                                </Link>
                                <div class={`${showWebMenu && "show"} dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0`}>
                                    <Link to="/course/html" className="dropdown-item">HTML</Link>
                                    <Link to="/course/css" className="dropdown-item">CSS</Link>
                                    <Link to="/course/jQuery" className="dropdown-item">jQuery</Link>
                                </div>
                            </div>
                            <Link to="/category/Web-design" className="nav-item nav-link">Web Design</Link>
                            <Link to="/category/Backend" className="nav-item nav-link">Backend</Link>
                            <Link to="/category/Game" className="nav-item nav-link">Game</Link>
                            <Link to="/category/Marketing" className="nav-item nav-link">Marketing</Link>
                            <Link to="/category/Research" className="nav-item nav-link">Research</Link>
                            <Link to="/category/Seo" className="nav-item nav-link">SEO</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse"
                            onClick={() => setShowMenu(prev => !prev)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class={`${showMenu && "show"} collapse navbar-collapse justify-content-between`} id="navbarCollapse">
                            <div className="navbar-nav py-0">
                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link ">About</NavLink>
                                <NavLink to="/courses/1" className="nav-item nav-link ">Courses</NavLink>
                                <NavLink to="/teachers" className="nav-item nav-link ">Teachers</NavLink>
                                <div className="nav-item dropdown"
                                    onMouseLeave={() => setShowBlogMenu(prev => !prev)}>
                                    <Link
                                        onMouseEnter={() => setShowBlogMenu(prev => !prev)}

                                        to="/blogs" className="nav-link dropdown-toggle " data-toggle="dropdown">Blog</Link>
                                    <div class={`${showBlogMenu && "show"} dropdown-menu rounded-0 m-0`}>
                                        <a href="blogs" className="dropdown-item">Blog List</a>
                                        <a href="single.html" className="dropdown-item">Blog Detail</a>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link ">Contact</NavLink>

                                {authContext.userInfo?.role === "ADMIN" &&
                                    <Link to="/p-admin" className="nav-item nav-link">Admin Panel</Link>}

                            </div>
                            {authContext.userInfo?.name ? (<Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/user-panel">{authContext.userInfo.name}</Link>)
                                : (<Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="/register">Sign In Now</Link>)}

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
