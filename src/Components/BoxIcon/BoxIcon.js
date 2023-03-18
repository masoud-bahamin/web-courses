import React from 'react'
import "./BoxIcon.css"

export default function BoxIcon({ title, subTitle, icon }) {
    return (
        <div className='col-md-4'>
            <div className='row box-icon-div'>
                <div className='col-2'>
                    <i className={`${icon} icon-box-icon`}></i>
                </div>
                <div className='col-10'>
                    <h6>{title}</h6>
                    <p className='paragraf-icon-box'>{subTitle}</p>
                </div>
            </div>
        </div>
    )
}
