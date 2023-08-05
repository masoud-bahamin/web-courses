import React from 'react'
import { useState } from 'react'
import "./Chat.css"
import { MdSend } from 'react-icons/md';
import api from "./../../Pages/Api"
import { useEffect } from 'react';
import Image1 from "./../../img/chat.png"
import Image2 from "./../../img/user4.jpg"

export default function Chat() {

    const [show, setShow] = useState(false)
    const [sendMessege, setSendMessege] = useState("")
    const [sendMessegeArrey, setSendMessegeArrey] = useState([])
    const [getMessege, setGetMessege] = useState("")


    function sendMessegeHandler() {
        setSendMessegeArrey( (prev) => [...prev , sendMessege])
        setSendMessege("")

       let date = new Date()
            fetch(`${api}chats.json`,{
            method:'POST' ,
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
               send: [...sendMessegeArrey,sendMessege],
               answer:[],
               date,
            })
        })

        setTimeout(() => {
            setGetMessege("Our experts will answer you as soon as possible")
        }, 2000);
        
    }

    

    useEffect(()=> {

    } , [])

    return (
        <>
            <div onClick={() => setShow(true)}
                className='chat-div-container'>
                <img src={Image1} className='w-100 m-0' style={{ borderRadius: "7px" }} />
            </div>
            <div className={`chat-main-box ${show ? "show" : ""}`} >
                <div className='row justify-content-around align-items-center p-2'>
                    <img src={Image2} className='chat-image-top' />
                    <h6>Online Chat</h6>
                    <button className='chat-btn-top'
                        onClick={() => setShow(false)}
                    >X</button>
                </div>
                <div className='chat-text-box'>
                    <ul>
                        {
                            sendMessegeArrey.map((messege , index) => (
                                <li key={index}>{messege}</li>
                            ))
                        }
                        {
                            getMessege.length > 0 && <div className='alert alert-info' >{getMessege}</div>
                        }
                    </ul>
                </div>
                <div className='p-2 w-100 ml-3'>
                    <div className='row form-control p-1 justify-content-between'>
                        <input
                            onChange={e => setSendMessege(e.target.value)}
                            value={sendMessege}
                            className='border-none-input' placeholder='Type...' />
                        <MdSend className='chat-box-icon' onClick={() => sendMessegeHandler()}/>
                    </div>

                </div>
            </div>

        </>
    )
}
