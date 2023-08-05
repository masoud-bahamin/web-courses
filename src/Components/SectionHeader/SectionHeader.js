import React from 'react'
import "./SectionHeader.css"

export default function SectionHeader({title , subTitle}) {
    return (
        <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>{title}</h5>
            <h1>{subTitle}</h1>
        </div>
    )
}
