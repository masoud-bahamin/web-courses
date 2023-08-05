import React from 'react'
import SocialIcon from './SocialIcon'

export default function SocialIcons() {
    return (
        <div className="d-flex justify-content-start mt-4">
            <SocialIcon social="twitter" href="#"/>
            <SocialIcon social="facebook" href="#"/>
            <SocialIcon social="linkedin" href="#"/>
            <SocialIcon social="instagram" href="#"/>
        </div>
    )
}
