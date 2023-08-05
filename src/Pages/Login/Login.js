import React, { useContext, useEffect } from 'react'
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
import { loginSechma } from '../../validation/yup.Validation'
import { myAxios } from '../../servises/axios/configs/myAxios'

export default function Login() {

  let navigate = useNavigate()

  let authContext = useContext(AuthContext)

  const loginUser = async ({ username, password }) => {

    try {
      const response = await myAxios("users.json")

      for (const key in response.data) {
        if (((response.data[key].username).toLowerCase() === (username).toLowerCase()) || (
          response.data[key].password === password)) {
          localStorage.setItem("token", response.data[key].id)
          authContext.setIsLogin(true)
          swal("You are login successfully", {
            icon: "success"
          }).then(() => navigate("/"))
          break
        } else {
          swal("Your username and password is NOT VALID", {
            icon: "error"
          })
        }
      }

    } catch (error) {
      alert(error)
    }

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
                    initialValues={{ username: "", password: "" }}
                    onSubmit={(values) => {
                      console.log(values);
                      loginUser(values)
                    }}
                    validationSchema={loginSechma}
                  >
                    <Form>
                      <div className="mb-3">
                        <Field
                          name="username"
                          className={" border-0 p-3 m-0"}
                          type="text"
                          placeholder="username" />
                        <div className='mt-1 text-white'><ErrorMessage name="username" /></div>
                      </div>
                      <div className="mb-3">
                        <Field
                          name="password"
                          className={" border-0 p-3 m-0"}
                          type="password"
                          placeholder="password" />
                        <div className='mt-1 text-white'><ErrorMessage name="password" /></div>
                      </div>
                      <div>
                        <button className="btn btn-dark btn-block border-0 py-3 mb-5" type="submit">Login</button>
                      </div>
                      <div>
                        <Link to="/register" className='text-white'>Dont have a account?  Sign Up</Link>
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
