import React from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import useForm from '../../Hooks/useForm'
import { minValid, maxValid, emailValid } from '../../Validations/Rouls'
import api from '../Api'

export default function Contact() {

    const [formState, formHandler] = useForm({
        email: {
            value: "",
            isValid: false
        },
        name: {
            value: "",
            isValid: false
        },
        subject: {
            value: "",
            isValid: false
        },
        message: {
            value: "",
            isValid: false
        },
    }, false)

    const navigate = useNavigate()

    const sendMessage = (event) => {
        event.preventDefault()

        if(formState.isFormValid){
            let id = `${formState.inputs.name.value}${Math.floor(Math.random() * 999999)}`

            let date = new Date()
    
            let newMessage = {
                id: id,
                name: formState.inputs.name.value,
                email: formState.inputs.email.value,
                subject: formState.inputs.subject.value,
                message: formState.inputs.message.value,
                date,
            }
    
            fetch(`${api}messages.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            }).then(res => {
                if (res.ok) {
                    swal("Your message was send successfully", {
                        icon: "success",
                    }).then(() => navigate("/"))
                }
            })
        }else {
            swal("Your form is NOT VALID" , {
                icon:"error"
            })
        }

       
    }

    return (
        <>
            <Header />
            <Breadcrump title="HOME" subTitle="Contact" titleHref="/" />

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3 letter-spacing-5">Contact</h5>
                        <h1>Contact For Any Query</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form bg-secondary rounded p-5">
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                    <div className="control-group">
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(20),
                                            ]}
                                            onRender={formHandler}
                                            type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(25),
                                                emailValid()
                                            ]}
                                            onRender={formHandler}
                                            type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(20),
                                            ]}
                                            onRender={formHandler}
                                            type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <Input
                                            validations={[
                                                minValid(4),
                                                maxValid(320),
                                            ]}
                                            element="textArea"
                                            onRender={formHandler}
                                            className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" />
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="text-center">
                                        <button onClick={(event => sendMessage(event))}
                                            className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
