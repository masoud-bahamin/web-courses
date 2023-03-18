import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from '../SocialIcons/SocialIcon'

export default function TeacherBox({ image, name, job ,username}) {
    return (
        <div class="col-md-6 col-lg-3 text-center team mb-4">
            <div class="team-item rounded overflow-hidden mb-2">
                <div class="team-img position-relative">
                    <img class="img-fluid" src={`/img/${image}`} alt="" />
                    <div class="team-social">
                        <SocialIcon social="twitter" href="#" />
                        <SocialIcon social="facebook" href="#" />
                        <SocialIcon social="linkedin" href="#" />
                    </div>
                </div>
                <Link to={`teacher/${username}`}>
                <div class="bg-secondary p-4">
                    <h5>{name}</h5>
                    <p class="m-0">{job}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}
