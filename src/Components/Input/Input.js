import React, { useEffect, useReducer, useState } from 'react'
import Validator from '../../Validations/Validator'
import "./Input.css"


const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT": {
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }

        }
        default: {
            return state
        }
    }
}

export default function Input({ type, placeholder, validations, onRender, id, className , element }) {

    const [inputValue, dispatch] = useReducer(reducer, { value: "", isValid: false })

    const inputHandler = (value) => {
        dispatch({
            type: "INPUT",
            value,
            isValid: Validator(value, validations)
        })
    }

    useEffect(() => {
        onRender(id, inputValue.value, inputValue.isValid)
    }, [inputValue])

    return (
        <div className='d-flex w-100 bg-white'>
            {element==="textArea" ? (
                <textarea
                className={`${className} col-md-11`}
                value={inputValue.value}
                onChange={event => inputHandler(event.target.value)}
                type={type} placeholder={placeholder} />
            ) : (
            <input
                className={`${className} col-md-11`}
                style={{outline:"none" , border:"none !important"}}
                value={inputValue.value}
                onChange={event => inputHandler(event.target.value)}
                type={type} placeholder={placeholder} />)}
            {inputValue.isValid &&<i className='fa fa-check icon-input-chek'></i>}
        </div>
    )
}
