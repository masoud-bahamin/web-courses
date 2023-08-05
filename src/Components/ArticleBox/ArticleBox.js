import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'


export default function ArticleBox({ image, title, score, shortname, description, date }) {

    const [showLoader, setShowLoader] = useState(true)

    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4 py-3">
                <div className="blog-item position-relative overflow-hidden rounded mb-2">
                    <div className='w-100' style={{ height: 350 }}>
                        <img onLoad={() => setShowLoader(false)}
                            className="w-100" src={image} alt="" height={200} />
                        {showLoader && <Loader />}
                    </div>
                    <Link className="blog-overlay text-decoration-none" to={`/article/${shortname}`}>
                        <h5 className="text-white mb-3">{title}</h5>
                        <p className="text-primary m-0">{date?.slice(0, 10)}</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
