import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import AuthContext from '../../../Context/authContext'
import api from '../../Api'

export default function Comments() {

    const [comments, setComments] = useState([])

    const {userInfo} = useContext(AuthContext)

    const getAllComments = () => {
        fetch(`${api}comments.json`)
            .then(res => res.json())
            .then(data => setComments(Object.entries(data)))
    }

    useEffect(() => {
        getAllComments()
    }, [])

    const answerComment = (id) => {

        let adminAnswerDate = new Date()

        swal("please inter your answer", {
            icon: "warning",
            content: "input",
            buttons: ["cancel", "answer"]
        }).then(res => {
            if (res) {
                let newMessage = comments.find(comment => comment[0] === id)
                newMessage[1].answer = res ;
                newMessage[1].admin = userInfo.username ;
                newMessage[1].ok = true ;
                newMessage[1].adminAnswerDate = adminAnswerDate ;

                fetch(`${api}comments/${id}.json` , {
                    method:"PUT",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(newMessage[1])
                }).then(res => {
                    if(res.ok){
                        swal({
                            title:"your answer was send successfully",
                            icon:"success"
                        }).then(() => getAllComments())
                    }
                })
                
            }
        })
    }

    const acceptComment = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "yes"]
        }).then(res => {
            if (res) {
                let newMessage = comments.find(comment => comment[0] === id)
                newMessage[1].admin = userInfo.username ;
                newMessage[1].ok = true ;

                fetch(`${api}comments/${id}.json` , {
                    method:"PUT",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(newMessage[1])
                }).then(res => {
                    if(res){
                        swal({
                            title:"Comment was acceptes successfully",
                            icon:"success"
                        }).then(()=> getAllComments())
                    }
                })
                
            }
        })
    }
    const rejectComment = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "yes"]
        }).then(res => {
            if (res) {
                let newMessage = comments.find(comment => comment[0] === id)
                newMessage[1].admin = userInfo.username ;
                newMessage[1].ok = false ;

                fetch(`${api}comments/${id}.json` , {
                    method:"PUT",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(newMessage[1])
                }).then(res => {
                    if(res){
                        swal({
                            title:"Comment was acceptes successfully",
                            icon:"success"
                        }).then(()=> getAllComments())
                    }
                })
                
            }
        })
    }

    const deleteComment = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "Delete"]
        }).then(res => {
            if (res) {

                fetch(`${api}comments/${id}.json` , {
                    method:"DELETE",
                }).then(res => {
                    if(res){
                        swal({
                            title:"Comment was deleted successfully",
                            icon:"success"
                        }).then(()=> getAllComments())
                    }
                })
                
            }
        })
    }

    return (
        <div className='mt-5'>
            <div className='alert alert-info'>Comments</div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Stute</th>
                        <th>UserName</th>
                        <th>Message</th>
                        <th>Course</th>
                        <th>Answer</th>
                        <th>Accept</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment => (
                        <tr key={comment[0]}>
                            <td>{comment[1].ok ? <i className='fa fa-check'></i> : "--"}</td>
                            <td>{comment[1].username}</td>
                            <td>{comment[1].message}</td>
                            <td>{comment[1].shortname}</td>
                            <td>
                                <button
                                    onClick={() => answerComment(comment[0])}
                                    className='btn btn-success btn-sm'>
                                    Answer
                                </button>
                            </td>
                            <td>
                                {comment[1].ok ? (
                                    <button
                                    onClick={() => rejectComment(comment[0])}
                                    className='btn btn-danger btn-sm'>
                                    Reject
                                </button>
                                ) : (
                                <button
                                    onClick={() => acceptComment(comment[0])}
                                    className='btn btn-success btn-sm'>
                                    Accept
                                </button>)}
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteComment(comment[0])}
                                    className='btn btn-danger btn-sm'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
