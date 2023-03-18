import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import swal from 'sweetalert'
import Input from '../../Components/Input/Input'
import useForm from '../../Hooks/useForm'
import { maxValid, minValid, emailValid } from "./../../Validations/Rouls"
import api from '../Api'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import AuthContext from '../../Context/authContext'

export default function Login() {

  const [formState, formHandler] = useForm({

    username: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    },
  }, false)

  let navigate = useNavigate()

  console.log(formState);

  let authContext = useContext(AuthContext)


  const loginUser = (event) => {
    event.preventDefault()


    fetch(`${api}users.json`)
      .then(res => res.json())
      .then(users => {
        for (const key in users) {
          if (((users[key].username).toLowerCase() === (formState.inputs.username.value).toLowerCase()) && (
            users[key].password === formState.inputs.password.value)) {
            localStorage.setItem("token", users[key].id)
            authContext.setIsLogin(true)
            swal("You are login successfully", {
              icon: "success"
            }).then(() =>  navigate("/"))
            break
          } else {
            swal("Your username and password is NOT VALID", {
              icon: "error"
            })
          }
        }
      })
  }

  return (
    <>
      <Header />
      <div class="container-fluid bg-registration py-5" style={{ margin: "10px 0" }}>
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="mb-4">
                <h5 class="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Need Any Courses</h5>
                <h1 class="text-white">30% Off For New Students</h1>
              </div>
              <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor</p>
              <ul class="list-inline text-white m-0">
                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
              </ul>
            </div>
            <div class="col-lg-5">
              <div class="card border-0">
                <div class="card-header bg-light text-center p-4">
                  <h1 class="m-0">Sign Up Now</h1>
                </div>
                <div class="card-body rounded-bottom bg-primary p-5">
                  <form>
                    <div class="form-group">
                      <Input
                        onRender={formHandler}
                        id="username"
                        className={"form-control border-0 p-4"}
                        validations={[
                          minValid(4),
                          maxValid(20)
                        ]}
                        type="text" placeholder="Your username" required="required" />
                    </div>
                    <div class="form-group">
                      <Input
                        onRender={formHandler}
                        id="password"
                        className={"form-control border-0 p-4"}
                        validations={[
                          minValid(4),
                          maxValid(25),
                        ]}
                        type="password" placeholder="Your password" required="required" />
                    </div>
                    <div>
                      <button
                        onClick={(event) => loginUser(event)}
                        class="btn btn-dark btn-block border-0 py-3" type="submit">Login</button>
                    </div>
                  </form>
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
