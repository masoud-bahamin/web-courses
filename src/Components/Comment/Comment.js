import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import AuthContext from '../../Context/authContext'
import useForm from '../../Hooks/useForm'
import api from '../../Pages/Api'
import { maxValid, minValid } from '../../Validations/Rouls'
import Input from '../Input/Input'

export default function Comment() {

    const [comments, setComments] = useState([])
    const [formState, formHandler] = useForm({
        subject: {
            value: "",
            isValid: false
        },
        message: {
            value: "",
            isValid: false
        },
    }, false)

    const { courseId } = useParams()

    const getAllComments = () => {
        fetch(`${api}comments.json`)
            .then(res => res.json())
            .then(data => {
                let allComments = Object.entries(data)
                setComments(allComments.filter(comment => (comment[1].shortname === courseId) && comment[1].ok))
            })
    }

    useEffect(() => {
        getAllComments()
    }, [])

    const authContext = useContext(AuthContext)

    const sendMessage = (event) => {
        event.preventDefault()

        if (formState.isFormValid) {
            let id = `${authContext.userInfo.username}${Math.floor(Math.random() * 999999)}`

            let date = new Date()

            let newMessage = {
                id: id,
                subject: formState.inputs.subject.value,
                message: formState.inputs.message.value,
                username: authContext.userInfo.username,
                shortname: courseId,
                answer: "",
                ok: false,
                admin: "",
                adminAnswerDate: "",
                date,
            }

            console.log(newMessage);

            fetch(`${api}comments.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            }).then(res => {
                if (res.ok) {
                    swal("Your message was send successfully", {
                        icon: "success",
                    })
                }
            })
        } else {
            swal("Your form is NOT VALID", {
                icon: "error"
            })
        }
    }

    return (
        <>
            {/* <!-- Comment List --> */}
            <div className="mb-5">
                {comments.length === 0 ? (<div className='alert alert-info'>No Comment Yet</div>) : (<>
                    <h3 className="text-uppercase mb-4 letter-spacing-5">{comments.length} Comments</h3>
                    {comments.map(comment => (
                        <div key={comment[0]}>
                            <div className="media mb-1">
                                <img src="/img/user.png" alt="Image" className="img-fluid rounded-circle mr-3 mt-1
                         width-45"/>
                                <div className="media-body">
                                    <h6>{comment[1].username} <small><i>{comment[1].date?.slice(0, 10)}</i></small></h6>
                                    <p>{comment[1].message}</p>
                                    <button className="btn btn-sm btn-secondary">Reply</button>
                                </div>
                            </div>
                            {comment[1].answer &&
                                <div className="media mt-1 mb-5">
                                    <span className='mr-2'>Answer</span>
                                    <img src="/img/admin.png" alt="Image" className="img-fluid rounded-circle mr-2 mt-1
                              width-45"/>
                                    <div className="media-body">
                                        <h6>{comment[1].admin}{" "}<small><i>{comment[1].adminAnswerDate?.slice(0, 10)} </i></small></h6>
                                        <p>{comment[1].answer}</p>
                                    </div>
                                </div>}
                        </div>
                    ))}
                </>)}
            </div>

            {/* <!-- Comment Form --> */}
            <div className="bg-secondary rounded p-5">
                <h3 className="text-uppercase mb-4 letter-spacing-5">Leave a comment</h3>
                <form>
                    <div className="form-group">
                        <label for="name">Subject *</label>
                        <Input
                            validations={[
                                minValid(4),
                                maxValid(25)
                            ]}
                            onRender={formHandler}
                            type="text" className="form-control border-0" id="subject" />
                    </div>

                    <div className="form-group">
                        <label for="message">Message *</label>
                        <Input
                            validations={[
                                minValid(4),
                                maxValid(225)
                            ]}
                            onRender={formHandler}
                            element="textArea"
                            id="message" cols="30" rows="5" className="form-control border-0" />
                    </div>
                    <div className="form-group mb-0">
                        {authContext.isLogin ? (
                            <input onClick={event => sendMessage(event)}
                                type="submit" value="Leave Comment" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold" />
                        ) : (<div className='alert alert-warning'>
                            For send your comment please login
                            <button className='btn btn-success ml-5'
                            ><Link to="/login" style={{color:"white"}}> Login</Link></button>
                            </div>)}
                    </div>
                </form>
            </div>
        </>
    )
}
