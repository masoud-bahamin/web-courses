import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import AuthContext from '../../Context/authContext'
import useForm from '../../Hooks/useForm'
import api from '../../Pages/Api'
import { maxValid, minValid } from '../../Validations/Rouls'
import Input from '../Input/Input'
import { useFetch } from '../../Hooks/useFetch'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { commentSchema } from '../../validation/yup.Validation'
import { v4 } from 'uuid'
import { myAxios } from '../../servises/axios/configs/myAxios'

export default function Comment() {

    const [comments, setComments] = useState([])
   const [initialValues , setInitialValues] = useState()

    const { courseId } = useParams()

    const [data, loading, error] = useFetch(`comments.json`)


    useEffect(() => {
        if (!loading) {
            setComments(data.filter(comment => (comment[1].shortname === courseId) && comment[1].ok))
        }

    }, [data])

    const authContext = useContext(AuthContext)

    const sendMessage = async ({ subject, message }) => {

        let id = v4()

        let date = new Date()

        let newMessage = {
            id: id,
            subject,
            message,
            username: authContext.userInfo.username,
            shortname: courseId,
            answer: "",
            ok: false,
            admin: "",
            adminAnswerDate: "",
            date,
        }

        const response = await myAxios.post(`comments.json`, { ...newMessage })
        if (response.statusText) {
            swal("Your message was send successfully and when admin accepted will display", {
                icon: "success",
            })
            
        } else {
            swal("plaese try again")
        }

    }

    return (
        <>
            {/* <!-- Comment List --> */}
            <div className="mb-5">
                {comments.length === 0 ? (<div className='alert alert-info'>No Comment Yet</div>) : (<>
                    <h3 className="text-uppercase mb-4 letter-spacing-5">{comments.length} Comments</h3>
                    {comments.map(comment => (
                        <div key={comment[0]} className='mb-4 border p-3'>
                            <div className="media mb-1">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOB84LLmkJh3CK_3rZ_BrH5N-7Ir6SrnLJqnI-MOpKXgA3Ws1ZhwDgIiT0Pulwr439TY&usqp=CAU" alt="Image" className="img-fluid rounded-circle mr-3 mt-1 width-45" />
                                <div className="media-body">
                                    <h6>{comment[1].username} <small><i>{comment[1].date?.slice(0, 10)}</i></small></h6>
                                    <p>{comment[1].message}</p>
                                    {/* <button className="btn btn-sm btn-secondary">Reply</button> */}
                                </div>
                            </div>
                            {comment[1].answer &&
                                <div className="media mt-1 mb-5 d-flex align-items-center">
                                    <span className='mr-2' style={{fontSize:13}}>Replayed</span>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU" alt="Image" className="img-fluid rounded-circle mr-2 mt-1 width-45" />
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
                {authContext.isLogin ? (
                    <Formik
                        initialValues={{ subject: "", message: "" }}
                        onSubmit={(values , actions) => {
                            sendMessage(values)
                            actions.resetForm()
                        }}
                        validationSchema={commentSchema}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <Field type="text" className="form-control border-0" name="subject" />
                                <div className='text-danger my-1'><ErrorMessage name="subject" /></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <Field as="textarea" name="message" cols="30" rows="5" className="form-control border-0" />
                                <div className='text-danger my-1'> <ErrorMessage name="message" /></div>
                            </div>
                            <div className="form-group mb-0">
                                <input type="submit" value="Leave Comment" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold" />
                            </div>
                        </Form>
                    </Formik>
                ) : (<div className='alert alert-warning'>
                    For send your comment please login
                    <button className='btn btn-success ml-5'
                    ><Link to="/login" style={{ color: "white" }}> Login</Link></button>
                </div>
                )}
            </div>
        </>
    )
}
