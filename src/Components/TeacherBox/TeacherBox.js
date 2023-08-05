import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from '../SocialIcons/SocialIcon'


export default function TeacherBox({ image, name, job ,username , img}) {
  
    return (
        <div className="col-md-6 col-lg-3 text-center team mb-4">
            <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                    <img className="img-fluid" src={img} alt="" />
                    <div className="team-social">
                        <SocialIcon social="twitter" href="#" />
                        <SocialIcon social="facebook" href="#" />
                        <SocialIcon social="linkedin" href="#" />
                    </div>
                </div>
                <Link to={`teacher/${username}`}>
                <div className="bg-secondary p-4">
                    <h5>{name}</h5>
                    <p className="m-0">{job}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}
