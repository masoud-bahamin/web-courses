import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrump({title , titleHref , subTitle}) {
  return (
    <div class="container-fluid page-header" style={{marginBottom: 10}}>
    <div class="container">
        <div class="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
            <h3 class="display-4 text-white text-uppercase">{subTitle}</h3>
            <div class="d-inline-flex text-white">
                <p class="m-0 text-uppercase"><Link class="text-white" to={titleHref}>{title}</Link></p>
                <i class="fa fa-angle-double-right pt-1 px-3"></i>
                <p class="m-0 text-uppercase">{subTitle}</p>
            </div>
        </div>
    </div>
</div>
  )
}
