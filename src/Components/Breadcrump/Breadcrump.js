import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrump({title , titleHref , subTitle}) {
  return (
    <div className="container-fluid page-header" style={{marginBottom: 10}}>
    <div className="container">
        <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
            <h3 className="display-4 text-white text-uppercase">{subTitle}</h3>
            <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><Link className="text-white" to={titleHref}>{title}</Link></p>
                <i className="fa fa-angle-double-right pt-1 px-3"></i>
                <p className="m-0 text-uppercase">{subTitle}</p>
            </div>
        </div>
    </div>
</div>
  )
}
