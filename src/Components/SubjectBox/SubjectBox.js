import React from 'react'
import { Link } from 'react-router-dom'

export default function SubjectBox({ cover, title, count ,href}) {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <Link to={href}>
                <div className="cat-item position-relative overflow-hidden rounded mb-2">
                    <img className="/img-fluid" src={cover} alt="" />
                    <a className="cat-overlay text-white text-decoration-none" href="">
                        <h4 className="text-white font-weight-medium">{title}</h4>
                        <span>{count}</span>
                    </a>
                </div>
            </Link>
        </div>
    )
}
