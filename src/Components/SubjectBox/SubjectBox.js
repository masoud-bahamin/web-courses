import React from 'react'
import { Link } from 'react-router-dom'

export default function SubjectBox({ cover, title, count ,href}) {
    return (
        <div class="col-lg-3 col-md-6 mb-4">
            <Link to={href}>
                <div class="cat-item position-relative overflow-hidden rounded mb-2">
                    <img class="/img-fluid" src={cover} alt="" />
                    <a class="cat-overlay text-white text-decoration-none" href="">
                        <h4 class="text-white font-weight-medium">{title}</h4>
                        <span>{count}</span>
                    </a>
                </div>
            </Link>
        </div>
    )
}
