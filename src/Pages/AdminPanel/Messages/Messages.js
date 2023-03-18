import React, { useContext, useEffect, useState } from 'react'
import swal from 'sweetalert'
import AuthContext from '../../../Context/authContext'
import api from '../../Api'

export default function Messages() {

    const [messages, setMessages] = useState([])

    const {userInfo} = useContext(AuthContext)

    const getAllMessages = () => {
        fetch(`${api}messages.json`)
            .then(res => res.json())
            .then(data => setMessages(Object.entries(data)))
    }

    useEffect(() => {
        getAllMessages()
    }, [])

    const answermessage = (id) => {
        swal("please inter your answer", {
            icon: "warning",
            content: "input",
            buttons: ["cancel", "answer"]
        }).then(res => {
            if (res) {
                let newMessage = messages.find(message => message[0] === id)
                newMessage[1].answer = res ;
                newMessage[1].admin = userInfo.username ;

                fetch(`${api}messages/${id}.json` , {
                    method:"PUT",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(newMessage[1])
                }).then(res => {
                    if(res){
                        swal({
                            title:"your answer was send successfully",
                            icon:"success"
                        }).then(()=> getAllMessages())
                    }
                })
                
            }
        })
    }

    const deletemessage = id => {
        swal("Are you sure?", {
            icon: "warning",
            buttons: ["cancel", "Delete"]
        }).then(res => {
            if (res) {

                fetch(`${api}messages/${id}.json` , {
                    method:"DELETE",
                }).then(res => {
                    if(res){
                        swal({
                            title:"message was deleted successfully",
                            icon:"success"
                        }).then(()=> getAllMessages())
                    }
                })
                
            }
        })
    }

    return (
        <div className='mt-5'>
            <div className='alert alert-info'>Messages</div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Stute</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Answer</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr key={message[0]}>
                            <td>{message[1].answer ? <i className='fa fa-check'></i> : "--"}</td>
                            <td>{message[1].email}</td>
                            <td>{message[1].message}</td>
                            <td>{message[1].date.slice(0,10)}</td>
                            <td>
                                <button
                                    onClick={() => answermessage(message[0])}
                                    className='btn btn-success btn-sm'>
                                    Answer
                                </button>
                            </td>
                           
                            <td>
                                <button
                                    onClick={() => deletemessage(message[0])}
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
