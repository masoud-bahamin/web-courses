import React from 'react'
import Breadcrump from '../../Components/Breadcrump/Breadcrump'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Teachers from '../../Components/Teachers/Teachers'

export default function TeachersPage() {
  return (
    <>
        <Header />
        <Breadcrump title="Home" titleHref="/" subTitle="Teachers" />
        <Teachers />
        <Footer />
    </>
  )
}
