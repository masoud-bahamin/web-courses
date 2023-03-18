import React from 'react'
import { useState } from 'react'
// import "./Chat.css"
import { MdSend } from 'react-icons/md';
import api from "./../../Api"
import { useEffect } from 'react';

export default function Chat() {

    const [show, setShow] = useState(false)
    const [sendMessege, setSendMessege] = useState("")
    const [sendMessegeArrey, setSendMessegeArrey] = useState([])
    const [getMessege, setGetMessege] = useState("")



    function sendMessegeHandler() {
        setSendMessegeArrey((prev) => [...prev, sendMessege])
        setSendMessege("")

        let date = new Date()
        fetch(`${api}chats/${getMessege[getMessege.length - 1][0]}.json`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                send: getMessege[getMessege.length - 1][1].send,
                answer: [...getMessege[getMessege.length - 1][1].answer, ...sendMessegeArrey],
                date,
            })
        }).then(res => console.log(res))

    }



    useEffect(() => {
        fetch(`${api}chats.json`)
            .then(res => res.json())
            .then(data => {
                setGetMessege(Object.entries(data))
            })
    }, [])

    return (
        <>
            <div onClick={() => setShow(true)}
                className='chat-div-container'>
                <img src='/img/chat.png' className='w-100 m-0' style={{ borderRadius: "7px" }} />
            </div>
            <div className={`chat-main-box ${show ? "show" : ""}`} >
                <div className='row justify-content-around align-items-center p-2'>
                    <img src='/img/user2.png' className='chat-image-top' />
                    <h6>Online Chat</h6>
                    <button className='chat-btn-top'
                        onClick={() => setShow(false)}
                    >X</button>
                </div>
                <div className='chat-text-box'>
                    <ul>
                        

                        {
                            getMessege.length > 0 && (
                                <>
                                    {getMessege[getMessege.length - 1][1].send.map(messege => (
                                        <div className='alert alert-info' >{messege}</div>
                                    ))}
                                </>
                            )
                        }

<>
                            {
                                sendMessegeArrey.length > 0 && (
                                    <>
                                        {
                                            sendMessegeArrey.map((messege, index) => (
                                                <li key={index}>{messege}</li>
                                            ))
                                        }
                                    </>

                                )
                            }
                        </>
                    </ul>
                </div>
                <div className='p-2 w-100 ml-3'>
                    <div className='row form-control p-1 justify-content-between'>
                        <input
                            onChange={e => setSendMessege(e.target.value)}
                            value={sendMessege}
                            className='border-none-input' placeholder='Type...' />
                        <MdSend className='chat-box-icon' onClick={() => sendMessegeHandler()} />
                    </div>

                </div>
            </div>

        </>
    )
}
