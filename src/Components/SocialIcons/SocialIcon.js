import React from 'react'

export default function SocialIcon({ href, social }) {
    return (
        <a class="btn btn-outline-light btn-square mr-2" href={href}>
            <i class = {social === "twitter" ? "fab fa-twitter" 
            : social === "facebook" ? "fab fa-facebook-f"
            : social === "linkedin" ? "fab fa-linkedin-in"
            : social === "instagram" ? "fab fa-instagram"
            : "fab fa-gmail"
        }>
            </i>
        </a>
    )
}
