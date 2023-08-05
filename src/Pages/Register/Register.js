import React, { useContext, useId } from 'react'
import Header from '../../Components/Header/Header'
import swal from 'sweetalert'
import Input from '../../Components/Input/Input'
import useForm from '../../Hooks/useForm'
import { maxValid, minValid, emailValid } from "./../../Validations/Rouls"
import api from '../Api'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import AuthContext from '../../Context/authContext'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { registerSchema } from '../../validation/yup.Validation'
import { v4 as uuidv4 } from 'uuid';

export default function Register() {



    let navigate = useNavigate()

    const authContext = useContext(AuthContext)
    
    const userId = uuidv4()

    const registerUser = ({name , username , email , password}) => {


        console.log(userId);

        let date = new Date()
        let newUser = {
            id: userId,
            name,
            username,
            email,
            password,
            image: `user.jpg`,
            date,
            role: `USER`,
            courses: []
        }

        fetch(`${api}users.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.ok) {
                localStorage.setItem("token", userId)
                authContext.setIsLogin(true)
                swal("Your registration was successful", {
                    icon: "success",
                }).then(() => navigate("/"))
            }
        })
    }

    return (
        <>
            <Header />
            <div className="container-fluid bg-registration py-5" style={{ margin: "10px 0" }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Need Any Courses</h5>
                                <h1 className="text-white">30% Off For New Students</h1>
                            </div>
                            <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Sign Up Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <Formik
                                    initialValues={{name:"" , username:"",email:"" , password:""}}
                                    onSubmit={(values) => {
                                        console.log(values);
                                        registerUser(values)
                                    }}
                                    validationSchema={registerSchema}
                                    >
                                        <Form>
                                            <div className="form-group">
                                                <Field
                                                    name="name"
                                                    className={"border-0 p-3"}
                                                    type="text"
                                                    placeholder="name" />
                                                    <ErrorMessage name="name" />
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    name="username"
                                                    className={"border-0 p-3"}
                                                    type="text"
                                                    placeholder="username" />
                                                    <ErrorMessage name="username" />
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    name="email"
                                                    className={"border-0 p-3"}
                                                    type="email"
                                                    placeholder="email" />
                                                    <ErrorMessage name="email" />
                                            </div>
                                            <div className="form-group">
                                                <Field
                                                    name="password"
                                                    className={"border-0 p-3"}
                                                    type="password"
                                                    placeholder="password" />
                                                    <ErrorMessage name="password" />
                                            </div>
                                            <div className="form-group">
                                                <Link to="/login" style={{ color: "white" }}>Login</Link>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={(event) => registerUser(event)}
                                                    className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
